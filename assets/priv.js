/* ArtONE Privacidade — motor do simulador especial de LGPD (Encarregado como serviço).
   Projeto apartado: o console reproduz as telas reais do ArtONE levantadas em
   ARTONE-REFERENCIA.md (topbar, submenu de Apps, inbox Novos/Meus/Outros, tag preta,
   protocolo, eventos de habilidade do Agente IA com modal "Detalhes", painéis do CRM
   e relatórios) e acrescenta o app de Privacidade como camada.
   Zero build, zero fetch: abre direto do disco (file://) ou hospedado. */
(function () {
  'use strict';

  window.initPrivacidade = function (D, CENARIOS) {

    /* ================= Cenário ================= */
    const params = new URLSearchParams(location.search);
    const SCEN = CENARIOS.find(s => s.id === params.get('cenario')) || CENARIOS[0];
    const PERSONA = SCEN.persona;
    const MODS = D.modulos;

    /* ================= Shell ================= */
    document.body.innerHTML = `
  <header class="simbar">
    <div class="brand">
      <span class="logo">ArtONE <em>Privacidade</em></span>
      <span class="scen" id="scenLabel"></span>
    </div>
    <div class="controls">
      <div class="seg" id="segScen"></div>
      <span class="progress mono" id="progress"></span>
      <button class="btn" id="btnReset" title="Reiniciar simulação">↺ Reiniciar</button>
      <button class="btn btn-primary" id="btnNext">▶ Iniciar simulação</button>
      ${D.cta ? `<a class="btn btn-cta" href="${D.cta.href}" target="_blank" rel="noopener">${D.cta.label}</a>` : ''}
    </div>
  </header>

  <div class="narration"><span class="dot"></span><span id="narrText"></span></div>

  <main class="stage show-phone" id="stage">
    <section class="phone-col">
      <div class="phone"><div class="phone-screen">
        <div class="wa-header">
          <div class="wa-avatar" id="waAv"></div>
          <div style="min-width:0">
            <div class="wa-title" id="waTitle"></div>
            <div class="wa-sub" id="waSub"></div>
          </div>
        </div>
        <div class="wa-chat" id="waChat"></div>
        <div class="wa-input"><div class="field">Mensagem</div><div class="send">➤</div></div>
      </div></div>
      <div class="phone-off">
        <b>A conversa acontece no ArtONE</b>
        <p>Você está na plataforma de privacidade, que é onde a LGPD é tratada: registros, prazos, riscos e prova.
           Quando algo precisa falar com gente, este ambiente cria o objeto — campanha, atendimento ou grupo — e a
           execução vai para o ArtONE.</p>
        <button class="acionar" data-mod="campanhas">Ir para o ArtONE →</button>
      </div></div>
    </section>

    <section class="console">
      <div class="a1-top">
        <div class="a1-logo" id="a1Logo">ArtONE<em>by customer art</em></div>
        <nav class="a1-nav">
          <button data-mod="canal" data-amb="artone">Atendimentos</button>
          <button data-amb="privacidade" data-mod="home" class="on">Apps</button>
        </nav>
        <div class="a1-right">
          <span class="a1-bell">🔔<b id="bellN">3</b></span>
          <span class="a1-user" id="a1User"><span class="av">${D.dpo.ini}</span><span class="hideSm">${D.dpo.nm}</span></span>
        </div>
      </div>

      <div class="app-head">
        <div class="app-title">Privacidade &amp; LGPD<span>${D.marca.nome} · ${D.marca.sub} · canal do Encarregado ${D.canal}</span></div>
        <div class="vercomo" id="verComo">
          <span class="lbl">Ver como:</span>
          <button class="on" data-modo="escritorio">Encarregado</button>
          <button data-modo="cliente">Controlador</button>
        </div>
        <div class="cli-sel" id="cliSel"><span class="lbl">Controlador:</span></div>
      </div>

      <nav class="mods" id="mods"></nav>
      <div class="mods-line"></div>
      <div class="scopebar" id="scopeBar"></div>

      <div class="panels" id="panels"></div>
    </section>
  </main>

  <div class="view-toggle" id="viewToggle">
    <button class="on" data-view="phone">📱 ${SCEN.phoneLabel || 'Titular'}<span class="ping"></span></button>
    <button data-view="console">🖥️ Encarregado<span class="ping"></span></button>
  </div>

  <div class="mask" id="mask"><div class="modal">
    <header><h3 id="mkTitle"></h3><button class="x" id="mkX">✕</button></header>
    <div class="body" id="mkBody"></div>
  </div></div>`;

    const $ = s => document.querySelector(s);
    const waChat = $('#waChat');
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const now = () => { const d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); };
    const scrollBottom = el => { el.scrollTop = el.scrollHeight; };

    /* ================= Módulos ================= */
    const panels = $('#panels'), modsNav = $('#mods');
    MODS.forEach((m, i) => {
      const b = document.createElement('button');
      b.innerHTML = m.nm + '<span class="ping"></span>';
      b.dataset.mod = m.id;
      if (i === 0) b.classList.add('on');
      b.onclick = () => showMod(m.id);
      modsNav.appendChild(b);

      const p = document.createElement('div');
      p.className = 'panel' + (m.split ? ' split' : '') + (i === 0 ? ' on' : '');
      p.id = 'panel-' + m.id;
      p.innerHTML = m.html;
      panels.appendChild(p);
    });
    function showMod(id) {
      const mod = MODS.find(m => m.id === id) || MODS[0];
      id = mod.id;
      /* o módulo decide o ambiente: gestão (Privacidade) ou execução (ArtONE) */
      setAmbiente(mod.artone ? 'artone' : 'privacidade');
      modsNav.querySelectorAll('button').forEach(b => {
        const on = b.dataset.mod === id;
        b.classList.toggle('on', on);
        if (on) b.classList.remove('has-ping');
      });
      panels.querySelectorAll('.panel').forEach(p => p.classList.toggle('on', p.id === 'panel-' + id));
      document.querySelectorAll('.artabs button').forEach(b => b.classList.toggle('on', b.dataset.mod === id));
    }

    /* Dois ambientes: a plataforma de privacidade trata a LGPD; o ArtONE executa a conversa. */
    let AMBIENTE = '';
    function setAmbiente(a) {
      if (AMBIENTE === a) return;
      AMBIENTE = a;
      document.body.classList.toggle('amb-artone', a === 'artone');
      const nav = document.querySelector('.a1-nav');
      if (nav) nav.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.amb === a));

    }
    function pulse(id) {
      const card = document.querySelector(`.selrow[data-mod="${id}"]`);
      if (card) card.classList.add('has-ping');
      if (!$('#stage').classList.contains('show-console')) {
        const vt = document.querySelector('.view-toggle [data-view="console"]');
        if (vt) vt.classList.add('has-ping');
      }
    }
    function goto(id) { showMod(id); pulse(id); }

    /* ================= Inbox (canal do Encarregado) ================= */
    const ibList = $('#ibList');
    if (ibList) {
      ibList.innerHTML = D.sessoes.map(s => `
      <div class="sess" data-cli="${s.cli}">
        <span class="av">${s.av}<i></i></span>
        <div style="min-width:0">
          <div class="nm">${s.nm} <span class="tag">${s.tag}</span></div>
          <div class="pv">${s.pv}</div>
          <div class="who2"><span class="chip chip-info">${s.eq}</span> ${s.resp}</div>
        </div>
        <div class="meta"><div class="tm">${s.tm}</div></div>
      </div>`).join('');
    }

    /* ================= Kanban de solicitações ================= */
    const kb = $('#kanban');
    function renderKanban() {
      if (!kb) return;
      kb.innerHTML = D.solicitacoes.map(c => `
      <div class="kcol" id="kcol-${c.id}">
        <div class="colhead">${c.nm} <span class="kcount">${c.cards.length}</span></div>
        <div class="kbody" id="kbody-${c.id}">
          ${c.cards.map(k => kcardHTML(k)).join('')}
        </div>
      </div>`).join('');
      kb.querySelectorAll('.kcard').forEach(el => { el.onclick = () => openCard(el.dataset.card); });
    }
    function kcardHTML(k) {
      return `<button class="kcard${k.late ? ' late' : ''}${k.hot ? ' hot' : ''}" data-card="${k.id}" data-cli="${k.cli || ''}">
        <span class="kid">${k.id}</span><b>${k.tit}</b><span class="kd">${k.kd}</span>
        <span class="krow"><span class="chip ${k.chip || 'chip-neutral'}">${k.chipT || ''}</span><span class="kd">${k.cliNm || ''}</span></span>
      </button>`;
    }
    function recount() {
      D.solicitacoes.forEach(c => {
        const col = document.getElementById('kcol-' + c.id);
        if (col) col.querySelector('.kcount').textContent = col.querySelectorAll('.kcard').length;
      });
    }
    renderKanban();

    /* card do lead: cria/move entre colunas */
    const LEAD = { hist: [], notas: [] };
    function ticket(colId, k) {
      const old = document.getElementById('kcard-lead');
      const from = old ? old.closest('.kcol').querySelector('.colhead').textContent.trim().replace(/\s+\d+$/, '') : null;
      if (old) old.remove();
      const body = document.getElementById('kbody-' + colId);
      if (!body) return;
      const wrap = document.createElement('div');
      wrap.innerHTML = kcardHTML(Object.assign({ id: LEAD.id, hot: true }, k));
      const el = wrap.firstElementChild;
      el.id = 'kcard-lead';
      el.onclick = () => openCard(LEAD.id);
      body.appendChild(el);
      const col = document.getElementById('kcol-' + colId);
      const to = col.querySelector('.colhead').textContent.trim().replace(/\s+\d+$/, '');
      LEAD.hist.push({ t: now(), tx: from ? `Item movido de <b>${from}</b> para <b>${to}</b>` : `Item criado em <b>${to}</b>`, by: 'Alterado por API' });
      recount(); pulse(MODS.find(m => m.kanban) ? MODS.find(m => m.kanban).id : 'solicitacoes');
      applyFilter();
    }
    function openCard(id) {
      if (id !== LEAD.id) {
        return modal('Item do painel · ' + id, '<p style="color:var(--ink-faint)">Item de demonstração. Rode a simulação para abrir o protocolo vivo, com anotações e histórico.</p>');
      }
      modal('Protocolo ' + LEAD.id, `
        <div class="mrow"><i>Título</i><b>${LEAD.tit || '—'}</b></div>
        <div class="mrow"><i>Controlador</i>${LEAD.cliNm || '—'}</div>
        <div class="mrow"><i>Titular</i>${PERSONA.nm} · ${PERSONA.tel}</div>
        <div class="mrow"><i>Responsável</i>${D.dpo.nm}</div>
        <div class="mrow"><i>Etiquetas</i><span class="tag">${LEAD.tag || 'LGPD'}</span></div>
        <div class="mrow"><i>Prazo legal</i>${LEAD.prazo || '15 dias corridos (art. 19, §2º)'}</div>
        <span class="mlbl">Anotações / Anexos</span>
        ${LEAD.notas.length ? LEAD.notas.map(n => `<div class="note"><div class="nh">Enviado por API — ${n.h}</div>${n.tx}</div>`).join('') : '<p style="color:var(--ink-faint); font-size:11.5px">Sem anotações.</p>'}
        <span class="mlbl">Histórico</span>
        ${LEAD.hist.map(h => `<div class="tline"><span class="pt${h.by.includes('API') ? '' : ' ok'}"></span><div class="tx"><b>${h.tx}</b><i>${h.by} · hoje ${h.t}</i></div></div>`).join('')}
      `);
    }

    /* ================= Filtro por controlador ================= */
    let CLI = 'todos';
    const cliSel = $('#cliSel');
    [{ id: 'todos', curto: 'Todos os clientes' }].concat(D.clientes).forEach(c => {
      const b = document.createElement('button');
      b.textContent = c.curto;
      b.classList.toggle('on', c.id === 'todos');
      b.onclick = () => {
        CLI = c.id;
        cliSel.querySelectorAll('button').forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        applyFilter();
      };
      cliSel.appendChild(b);
    });
    function applyFilter() {
      document.querySelectorAll('[data-cli]').forEach(el => {
        const v = el.dataset.cli;
        el.style.display = (CLI === 'todos' || !v || v === CLI) ? '' : 'none';
      });
      recount();
      fillPortal(CLI);
    }

    /* Portal do Controlador: os números mudam conforme a conta selecionada */
    function fillPortal(id) {
      const d = (D.portal || {})[id] || (D.portal || {}).todos;
      if (!d) return;
      const put = (sel, v) => { const e = document.querySelector(sel); if (e && v !== undefined) e.textContent = v; };
      put('#pIndice', d.indice); put('#pIndiceD', d.indiceD);
      put('#pPrazo', d.prazo); put('#pMedio', d.medio); put('#pPend', d.pend);
      put('#pRec', d.rec); put('#pOk', d.ok); put('#pAnd', d.and); put('#pRec2', d.rec2);
    }

    /* Ver como: Encarregado (escritório) × Controlador (cliente contratante) */
    const LOGO_ZELO = $('#a1Logo').innerHTML;
    const USER_ZELO = $('#a1User').innerHTML;
    let MODO = 'escritorio';
    function iniciais(txt) {
      return txt.replace(/[^\wÀ-ÿ ]/g, ' ').trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
    }
    function setModo(m) {
      MODO = m;
      document.body.classList.toggle('modo-cliente', m === 'cliente');
      $('#verComo').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.modo === m));
      if (m === 'cliente') {
        const alvo = (CLI !== 'todos') ? CLI : (SCEN.cliente || D.clientes[0].id);
        selectCli(alvo);
        const c = D.clientes.find(x => x.id === alvo);
        $('#a1Logo').innerHTML = c.curto + '<em>conta do controlador · ArtONE</em>';
        $('#a1User').innerHTML = '<span class="av">' + iniciais(c.curto) + '</span><span class="hideSm">Diretoria · ' + c.curto + '</span>';
        document.querySelectorAll('.a1-nav [data-mod="canal"]').forEach(b => b.style.display = 'none');
        $('#scopeBar').innerHTML = '🔒 <span>Você está vendo o <b>Portal do Controlador</b> de ' + c.nm +
          ', dentro da conta ArtONE dele. O escopo está travado nesta conta — nenhum outro cliente do escritório existe daqui de dentro.</span>';
        showMod('portal');
      } else {
        document.querySelectorAll('.a1-nav [data-mod="canal"]').forEach(b => b.style.display = '');
        $('#a1Logo').innerHTML = LOGO_ZELO;
        $('#a1User').innerHTML = USER_ZELO;
        showMod(SCEN.modInicial || MODS[0].id);
      }
    }
    $('#verComo').querySelectorAll('button').forEach(b => { b.onclick = () => setModo(b.dataset.modo); });
    function selectCli(id) {
      const c = [{ id: 'todos', curto: 'Todos os clientes' }].concat(D.clientes).find(x => x.id === id);
      if (!c) return;
      const idx = [{ id: 'todos' }].concat(D.clientes).findIndex(x => x.id === id);
      const btns = cliSel.querySelectorAll('button');
      btns.forEach(x => x.classList.remove('on'));
      if (btns[idx]) btns[idx].classList.add('on');
      CLI = id; applyFilter();
    }

    /* ================= Modal ================= */
    function modal(title, html) {
      $('#mkTitle').innerHTML = title;
      $('#mkBody').innerHTML = html;
      $('#mask').classList.add('on');
    }
    $('#mkX').onclick = () => $('#mask').classList.remove('on');
    $('#mask').onclick = e => { if (e.target === $('#mask')) $('#mask').classList.remove('on'); };
    addEventListener('keydown', e => { if (e.key === 'Escape') $('#mask').classList.remove('on'); });

    /* ================= Celular ================= */
    let WA = Object.assign({ title: D.marca.nome, ini: D.marca.sigla, sub: 'online' }, SCEN.wa || {});
    function paintPhone() {
      $('#waTitle').textContent = WA.title;
      $('#waAv').textContent = WA.ini;
      $('#waSub').textContent = WA.sub;
    }
    paintPhone();
    function setPhone(o) { WA = Object.assign({}, WA, o); paintPhone(); }

    async function waTyping(ms) {
      $('#waSub').textContent = 'digitando…';
      const t = document.createElement('div');
      t.className = 'bubble from-them';
      t.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
      waChat.appendChild(t); scrollBottom(waChat); marcaConversa();
      await sleep(ms); t.remove();
      $('#waSub').textContent = WA.sub;
    }
    /* whoCls: em grupos, varia a cor do remetente com 'w1'…'w4', como no ArtONE */
    function waMsg(side, html, who, whoCls) {
      const b = document.createElement('div');
      b.className = 'bubble ' + (side === 'me' ? 'from-me' : 'from-them');
      b.innerHTML = (who && side !== 'me' ? `<div class="who ${whoCls || ''}">${who}</div>` : '') + html +
        `<span class="t">${now()}${side === 'me' ? ' ✓✓' : ''}</span>`;
      waChat.appendChild(b); scrollBottom(waChat); marcaConversa();
    }
    function waClear() { waChat.innerHTML = ''; document.body.classList.remove('tem-conversa'); }
    function marcaConversa() { document.body.classList.add('tem-conversa'); }
    function waSys(html) {
      const b = document.createElement('div');
      b.className = 'wa-sys'; b.innerHTML = html;
      waChat.appendChild(b); scrollBottom(waChat); marcaConversa();
    }
    function waChoices(opts, cb) {
      const row = document.createElement('div');
      row.className = 'qr-row'; row.id = 'qrRow';
      opts.forEach(o => {
        const btn = document.createElement('button');
        btn.className = 'qr'; btn.textContent = o;
        btn.onclick = () => { row.remove(); S.awaiting = null; cb(o); };
        row.appendChild(btn);
      });
      waChat.appendChild(row); scrollBottom(waChat); marcaConversa();
      S.awaiting = { opts, cb, row };
    }

    /* ================= Conversa do operador ================= */
    const opChat = $('#opChat');
    function clearEmpty() { const e = $('#opEmpty'); if (e) e.remove(); }
    function opMsg(side, html, who) {
      if (!opChat) return;
      clearEmpty();
      const b = document.createElement('div');
      b.className = 'om ' + side;
      b.innerHTML = (who ? `<div class="who">${who}</div>` : '') + html;
      opChat.appendChild(b); scrollBottom(opChat);
    }
    function opSys(html) { opMsg('sys', html); }
    function opEvent(html, det) {
      if (!opChat) return;
      clearEmpty();
      const b = document.createElement('div');
      b.className = 'oev';
      b.innerHTML = `<span class="ic">⚙️</span><span>${html}${det ? `<span class="leg">A habilidade foi executada pelo Agente de IA hoje às ${now()}</span>` : ''}</span>` +
        (det ? '<button class="det">Detalhes</button>' : '');
      if (det) {
        b.querySelector('.det').onclick = () => modal('Detalhes da habilidade', `
          <div class="mrow"><i>Realizado por</i><b>Agente de IA · ${det.agente || 'Encarregado Virtual'}</b></div>
          <div class="mrow"><i>${det.mcp ? 'Servidor MCP consultado' : 'Habilidade executada'}</i>${det.mcp || det.hab}</div>
          <div class="mrow"><i>Realizado</i>hoje às ${now()}</div>
          <div class="mrow"><i>Operação</i><span class="mono">${det.op}</span></div>
          <div class="mrow"><i>Detalhes da API</i>hoje às ${now()} · duração ${det.dur || '0,82s'}</div>
          <span class="mlbl">Envio</span><div class="mjson mono">${det.envio}</div>
          <span class="mlbl">Resposta</span><div class="mjson mono">${det.resposta}</div>
          <span class="mlbl">Base legal registrada</span>
          <p style="font-size:11.5px; color:var(--ink-soft)">${det.base || 'Cumprimento de obrigação legal (art. 7º, II) · evidência gravada na trilha de auditoria.'}</p>
        `);
      }
      opChat.appendChild(b); scrollBottom(opChat);
    }
    function opTrack(rows) {
      if (!opChat) return;
      clearEmpty();
      const b = document.createElement('div');
      b.className = 'track';
      b.innerHTML = '<h5>Rastreamento</h5>' + rows.map(r => `<div class="tr"><i>${r[0]}</i><span>${r[1]}</span></div>`).join('');
      opChat.appendChild(b); scrollBottom(opChat);
    }
    function opInfo(titulo, html) {
      if (!opChat) return;
      clearEmpty();
      const b = document.createElement('div');
      b.className = 'track';
      b.innerHTML = '<h5>' + titulo + '</h5>' + html;
      opChat.appendChild(b); scrollBottom(opChat);
    }
    function opHead(o) {
      if (!$('#opHead')) return;
      $('#opHead').style.display = 'flex';
      if ($('#opFoot')) $('#opFoot').style.display = 'flex';
      if (o.nm) $('#opNm').innerHTML = o.nm + (o.tag ? ` <span class="tag">${o.tag}</span>` : '');
      if (o.ini) $('#opAv').textContent = o.ini;
      if (o.st) $('#opSt').innerHTML = o.st;
      if (o.chip) $('#opChip').className = 'chip ' + o.chip;
      if (o.chipT) $('#opChip').textContent = o.chipT;
    }
    function sess(o) {
      if (!ibList) return;
      let el = $('#sess-lead');
      if (!el) {
        const d = document.createElement('div');
        d.innerHTML = `<div class="sess on" id="sess-lead">
          <span class="av" style="background:var(--ok-soft); color:var(--ok)">${PERSONA.ini}<i></i></span>
          <div style="min-width:0">
            <div class="nm">${PERSONA.nm} <span class="tag" id="leadTag">${o.tag || 'LGPD'}</span></div>
            <div class="pv" id="leadPv"></div>
            <div class="who2"><span class="chip chip-info">${o.eq || 'Privacidade'}</span> ${D.dpo.nm.split(' · ')[0]}</div>
          </div>
          <div class="meta"><div class="tm">${now()}</div><div class="unread" id="leadUn" style="display:none"></div></div>
        </div>`;
        el = d.firstElementChild;
        ibList.prepend(el);
      }
      if (o.tag) $('#leadTag').textContent = o.tag;
      if (o.pv) $('#leadPv').textContent = o.pv;
      if (o.unread !== undefined) {
        const u = $('#leadUn');
        u.style.display = o.unread ? 'grid' : 'none';
        u.textContent = o.unread || '';
      }
    }

    /* ================= Utilitários de painel ================= */
    function set(sel, html) { const e = document.querySelector(sel); if (e) e.innerHTML = html; }
    function bar(sel, pct, txt) {
      const e = document.querySelector(sel);
      if (e) e.style.width = pct + '%';
      if (txt !== undefined) {
        const v = document.querySelector(sel + 'V');
        if (v) v.textContent = txt;
      }
    }
    function rowAdd(sel, html, cls) {
      const t = document.querySelector(sel);
      if (!t) return;
      const tr = document.createElement('tr');
      if (cls) tr.className = cls;
      tr.innerHTML = html;
      t.prepend(tr);
    }
    function stepOn(sel, i) {
      const wrap = document.querySelector(sel);
      if (!wrap) return;
      wrap.querySelectorAll('.stp').forEach((s, n) => {
        s.classList.toggle('done', n < i);
        s.classList.toggle('now', n === i);
      });
    }
    function clock(sel, valor, label, ok) {
      const e = document.querySelector(sel);
      if (!e) return;
      e.classList.toggle('ok', !!ok);
      e.querySelector('.cv').textContent = valor;
      e.querySelector('.cl').innerHTML = label;
    }

    /* evidências — o coração de uma plataforma de privacidade */
    let EV = D.evidencias || 12840;
    const evEl = () => document.getElementById('evCount');
    function evidencia(tx) {
      EV++;
      if (evEl()) {
        evEl().textContent = EV.toLocaleString('pt-BR');
        evEl().closest('.tile') && evEl().closest('.tile').classList.add('bumped');
      }
      const t = document.querySelector('#tblEvid');
      if (t) {
        const tr = document.createElement('tr');
        tr.className = 'new';
        tr.innerHTML = `<td class="mono">${now()}</td><td>${tx}</td><td>${D.dpo.nm.split(' · ')[0]}</td>`;
        t.prepend(tr);
      }
      const b = document.getElementById('bellN');
      if (b) b.textContent = String(Number(b.textContent) + 1);
    }

    function finish() {
      $('#btnNext').textContent = '✓ Simulação concluída';
      $('#btnNext').disabled = true;
    }

    /* ================= Motor de passos ================= */
    const S = { step: 0, running: false, awaiting: null, vars: {} };
    function setProgress() { $('#progress').textContent = `passo ${S.step}/${steps.length}`; }

    let nudgeTimer;
    function armNudge() {
      clearTimeout(nudgeTimer);
      const b = $('#btnNext');
      b.classList.remove('nudge');
      if (!b.disabled) nudgeTimer = setTimeout(() => b.classList.add('nudge'), 2600);
    }

    async function advance(fromChoice) {
      if (S.running) return;
      if (S.awaiting && !fromChoice) {
        const a = S.awaiting; a.row.remove(); S.awaiting = null;
        a.cb(a.opts[0]);
        return;
      }
      if (S.step >= steps.length) return;
      S.running = true;
      const btn = $('#btnNext');
      btn.disabled = true; btn.classList.remove('nudge');
      S.step++; setProgress();
      await steps[S.step - 1]();
      S.running = false;
      if (S.step < steps.length) {
        btn.disabled = false;
        btn.textContent = S.awaiting ? 'Escolher por mim ▶' : '▶ Avançar';
      }
      armNudge();
    }

    const api = {
      waMsg, waTyping, waSys, waChoices, setPhone, waClear, opInfo,
      opMsg, opSys, opEvent, opTrack, opHead, sess,
      goto, pulse, modal, ticket, lead: LEAD,
      set, bar, rowAdd, stepOn, clock, evidencia, selectCli,
      sleep, finish, advance, vars: S.vars, persona: PERSONA, dpo: D.dpo,
      protocolo: D.protocolo,
    };
    const steps = SCEN.steps(api);

    /* ================= Wiring ================= */
    $('#btnNext').onclick = () => { clearTimeout(nudgeTimer); $('#btnNext').classList.remove('nudge'); advance(false); };
    $('#btnReset').onclick = () => location.reload();

    const segScen = $('#segScen');
    CENARIOS.forEach(sc => {
      const b = document.createElement('button');
      b.textContent = sc.label;
      b.classList.toggle('on', sc.id === SCEN.id);
      b.onclick = () => {
        if (sc.id === SCEN.id) return;
        const p = new URLSearchParams(location.search);
        p.set('cenario', sc.id);
        location.search = p.toString();
      };
      segScen.appendChild(b);
    });

    document.querySelectorAll('#viewToggle button').forEach(b => b.onclick = () => {
      document.querySelectorAll('#viewToggle button').forEach(x => x.classList.remove('on'));
      b.classList.add('on'); b.classList.remove('has-ping');
      $('#stage').className = 'stage show-' + b.dataset.view;
    });

    /* barra fixa no mobile */
    const mobileBar = document.createElement('div');
    mobileBar.className = 'mobile-bar';
    mobileBar.innerHTML = '<div class="mb-narr"></div><div class="mb-row"></div>';
    document.body.appendChild(mobileBar);
    const narrEl = document.querySelector('.narration');
    const nextBtn = $('#btnNext');
    const toggleEl = $('#viewToggle');
    const narrHome = { parent: narrEl.parentNode, next: narrEl.nextSibling };
    const nextHome = { parent: nextBtn.parentNode, next: nextBtn.nextSibling };
    const mq = matchMedia('(max-width:980px)');
    function placeControls() {
      if (mq.matches) {
        mobileBar.querySelector('.mb-narr').appendChild(narrEl);
        const row = mobileBar.querySelector('.mb-row');
        row.appendChild(toggleEl); row.appendChild(nextBtn);
      } else {
        narrHome.parent.insertBefore(narrEl, narrHome.next);
        nextHome.parent.insertBefore(nextBtn, nextHome.next);
        document.body.appendChild(toggleEl);
      }
    }
    if (mq.addEventListener) mq.addEventListener('change', placeControls);
    placeControls();
    armNudge();

    /* ===== Jornada da solução: grupos de ações → tela do grupo → acionar o canal ===== */
    const jDet = document.createElement('div');
    jDet.className = 'jdet'; jDet.id = 'jDetalhe';
    /* botões de ação dos módulos: abrem o fluxo de criação/edição */
    document.querySelectorAll('[data-novo]').forEach(b => {
      b.addEventListener('click', () => {
        const n = (D.novos || {})[b.dataset.novo] || (D.novos || {}).generico;
        if (n) modal(n.titulo, n.html);
        document.querySelectorAll('#mkBody [data-mod]').forEach(x => {
          x.addEventListener('click', () => { $('#mask').classList.remove('on'); showMod(x.dataset.mod); });
        });
        document.querySelectorAll('#mkBody .csel, #mkBody .radio').forEach(x => {
          x.addEventListener('click', () => {
            x.parentElement.querySelectorAll(x.classList.contains('csel') ? '.csel' : '.radio')
              .forEach(y => y.classList.remove('on'));
            if (!x.classList.contains('csel')) {
              document.querySelectorAll('#mkBody .radio').forEach(y => y.classList.remove('on'));
            }
            x.classList.add('on');
          });
        });
      });
    });

    document.querySelectorAll('[data-mod]').forEach(b => {
      if (b.closest('.mods')) return;
      b.addEventListener('click', () => { jDet.classList.remove('on'); showMod(b.dataset.mod); });
    });
    {
      document.querySelectorAll('[data-acionar]').forEach(b => {
        b.onclick = async () => {
          const a = (D.acoes || {})[b.dataset.acionar];
          if (!a || b.disabled) return;
          b.disabled = true; b.textContent = 'Acionando…';
          showMod('campanhas');
          document.getElementById('panel-campanhas').appendChild(jDet);
          waClear();
          jDet.innerHTML =
            '<h5>Função acionada</h5><b>' + a.nm + '</b>' +
            '<div class="jd-canal">📡 Canal acionado: <b>' + a.canal + '</b>' +
            '<span class="jd-hint">o celular ao lado está mostrando essa conversa</span></div>' +
            '<div class="oq">' + a.oque + '</div>';
          jDet.classList.add('on');
          jDet.scrollIntoView({ block: 'nearest' });
          opInfo('Função acionada · ' + a.nm,
            '<div class="tr"><i>Canal</i><span><b>' + a.canal + '</b></span></div>');
          if (!$('#stage').classList.contains('show-phone')) {
            const vt = document.querySelector('.view-toggle [data-view="phone"]');
            if (vt) vt.classList.add('has-ping');
          }
          await a.run(api);
          b.textContent = 'Acionado ✔';
          b.classList.add('feito');
        };
      });
    }

    /* jornada: selo da etapa e atalhos do módulo Jornada para os cenários */
    function irParaCenario(id) {
      if (id === SCEN.id) { showMod(SCEN.modInicial || MODS[0].id); return; }
      const p = new URLSearchParams(location.search);
      p.set('cenario', id);
      location.search = p.toString();
    }
    document.querySelectorAll('.jitem[data-cen]').forEach(el => { el.onclick = () => irParaCenario(el.dataset.cen); });

    /* rótulos iniciais */
    $('#scenLabel').textContent = SCEN.scenarioLabel;
    $('#narrText').innerHTML = SCEN.intro;
    if (SCEN.modInicial) showMod(SCEN.modInicial);
    if (SCEN.cliente) selectCli(SCEN.cliente);
    if (evEl()) evEl().textContent = EV.toLocaleString('pt-BR');
    LEAD.id = SCEN.protocoloId || 'DT-0000';
    setProgress();
    waSys(SCEN.waAbertura || 'Hoje');

    if (params.get('embed') === '1') document.body.classList.add('embed');

    if (window.parent !== window) {
      let lastH = 0;
      const postH = force => {
        const h = Math.ceil(document.body.getBoundingClientRect().height) + 8;
        if (!force && Math.abs(h - lastH) < 2) return;
        lastH = h;
        parent.postMessage({ artoneSim: 'height', height: h }, '*');
      };
      addEventListener('load', () => postH(true));
      addEventListener('resize', () => postH(true));
      if (window.ResizeObserver) new ResizeObserver(() => postH()).observe(document.body);
      setInterval(postH, 500);
      postH(true);
    }
  };
})();

/* ArtONE Privacidade — cenários da Prefeitura de Santa Rita do Vale.
   Cada cenário roda nos dois lados: o WhatsApp de quem fala com a prefeitura
   e o console do Encarregado. A gestão da LGPD acontece na plataforma de
   privacidade (Apps); a conversa acontece no ArtONE (Atendimentos). */

window.CENARIOS = [

  /* ================================================================
     1 · Direito do cidadão — o dado espalhado por cinco secretarias
     ================================================================ */
  {
    id: 'titular',
    label: 'Direito do cidadão',
    scenarioLabel: 'Santa Rita · o dado do cidadão em cinco secretarias que não se falam',
    phoneLabel: 'Cidadão',
    cliente: 'prefeitura',
    modInicial: 'home',
    protocoloId: 'DT-0415',
    persona: { nm: 'Nivaldo Prata', ini: 'NP', tel: '+55 32 9• ••••-••74' },
    wa: { title: 'Zelo · Encarregado da Prefeitura', ini: 'ZP', sub: 'canal oficial de privacidade' },
    waAbertura: 'Hoje · 20:14',
    intro: '<strong>No município o dado do cidadão mora em secretarias que não se falam.</strong> Educação não sabe o que a Saúde tem, a Assistência não sabe o que o Tributário guarda — e o pedido de acesso costuma sair pela metade, que é o que mais vira reclamação na ANPD. Clique em <strong>Iniciar simulação</strong>. Quando aparecerem botões no celular, você pode tocar neles.',

    steps({ waMsg, waTyping, waSys, waChoices, setPhone, opMsg, opSys, opEvent, opInfo, opHead, sess, goto, ticket, lead, modal, set, bar, rowAdd, evidencia, sleep, finish, advance, vars, persona }) {

      lead.tit = 'Acesso e eliminação · cidadão e filha';
      lead.cliNm = 'Prefeitura de Santa Rita';
      lead.tag = 'ACESSO_ART18';
      lead.prazo = '15 dias corridos · art. 19, §2º';

      return [

        /* 1 — o pedido chega fora do expediente */
        async () => {
          goto('canal');
          waSys('📥 Atendimento iniciado em 31/08/2026 às 20:14 no canal <b>Encarregado · Prefeitura de Santa Rita</b>');
          waMsg('me', 'Boa noite. Minha filha está na fila da creche desde março e não sai do lugar. Quero <b>tudo que vocês têm</b> de dado sobre mim e sobre ela — e depois quero que <b>apaguem</b>. Ah, e queria saber quanto a prefeitura gastou no programa de creche esse ano.');
          await sleep(400);
          sess({ tag: 'ACESSO_ART18', pv: 'Acesso aos dados dele e da filha + eliminação', unread: 1, eq: 'Privacidade' });
          opHead({ nm: 'Nivaldo Prata', ini: 'NP', tag: 'ACESSO_ART18', st: 'WhatsApp · ' + persona.tel + ' · Equipe Privacidade', chip: 'chip-ia', chipT: 'IA' });
          opSys('📥 Atendimento iniciado às 20:14 · <b>fora do expediente</b> · conversa iniciada pelo cidadão');
          opMsg('client', 'Quer todos os dados sobre ele e a filha, eliminação depois, e o gasto do programa de creche.', 'Nivaldo Prata');
          opEvent('<b>Triagem</b> · direitos de titular (art. 18, II e VI) + <b>1 item que não é LGPD</b>: gasto público é pedido de informação', {
            hab: 'Triagem do pedido',
            op: 'Classificar_Pedido_Cidadao',
            dur: '0,49s',
            envio: '{\n  "orgao": "santa_rita",\n  "texto": "meus dados e da minha filha, apagar, gasto do programa"\n}',
            resposta: '{\n  "lgpd": [\n    { "item": "acesso", "artigo": "18_II", "prazo_dias": 15 },\n    { "item": "eliminacao", "artigo": "18_VI", "prazo_dias": 15 }\n  ],\n  "nao_lgpd": [\n    { "item": "gasto_do_programa", "regime": "LAI", "acao": "abrir_chamado_esic" }\n  ],\n  "protocolo_lgpd": "DT-0415"\n}',
            base: 'Art. 18, II e VI. O pedido de gasto público não é direito de titular — sai do fluxo do Encarregado e vira chamado no e-SIC.'
          });
          ticket('recebida', { tit: 'Acesso e eliminação · cidadão', kd: 'aberto agora · faltam 15 dias', cli: 'prefeitura', cliNm: 'Sec. de Educação', chip: 'chip-ia', chipT: 'IA' });
          evidencia('Pedido de titular registrado · protocolo DT-0415');
        },

        /* 2 — o que não é LGPD sai do caminho em um passo */
        async () => {
          await waTyping(1000);
          waMsg('them', 'Boa noite, senhor Nivaldo. Sobre o gasto do programa de creche: esse pedido não trata de dados seus, e sim de informação sobre a administração municipal — segue outra lei e outro rito. Registrei o protocolo <b>LAI-0452</b> e encaminhei à <b>Secretaria de Educação</b>, o setor responsável pela resposta.<div class="wa-card"><b>Importante</b>O retorno desse pedido virá pelo canal do e-SIC, e não por este número. Aqui atendemos exclusivamente aos direitos previstos na LGPD.</div>Passo ao que é seu e da sua filha, que é comigo.', 'Zelo · Encarregado');
          opEvent('Protocolo <b>LAI-0452</b> aberto e encaminhado à Sec. de Educação · fora do fluxo do Encarregado · <b>resposta pelo canal do e-SIC</b>, não por este número · prazo próprio de 20 dias');
          goto('solicitacoes');
          rowAdd('#tblLai', '<td class="mono">LAI-0452</td><td>Gasto do programa de creche 2026</td><td>Sec. de Educação</td><td><span class="chip chip-ia">0 de 20 dias</span></td>', 'new');
          opMsg('agent', 'O Encarregado não responde LAI — só garante o encaminhamento e que nenhum dado pessoal de terceiro saia por engano na resposta do setor.', 'IA · Encarregado');
          evidencia('Chamado LAI-0452 encaminhado à secretaria responsável');
        },

        /* 3 — identidade e representação legal */
        async () => {
          goto('canal');
          await waTyping(1000);
          waMsg('them', 'O protocolo já está aberto e o prazo correndo desde a sua primeira mensagem — para isso não precisei de documento nenhum.<br><br>Agora, para <b>entregar</b> os dados, sim: como envolve dado de saúde e da sua filha, que é menor, preciso confirmar que é o senhor e que o senhor responde por ela. Enviei um código ao celular do cadastro.', 'Zelo · Encarregado');
          await sleep(400);
          waMsg('me', '<b>720 431</b> · sou o pai dela, consta na matrícula');
          opMsg('client', '720 431 · sou o pai, consta na matrícula', 'Nivaldo Prata');
          opEvent('<b>Validar identidade e representação</b> · verificação exigida <b>na entrega</b>, não no registro · dado sensível e titular menor pedem rito reforçado', {
            hab: 'Validação de identidade e de representação legal',
            op: 'Validar_Titular_E_Representante',
            dur: '0,66s',
            envio: '{\n  "telefone": "+5532XXXXXX74",\n  "fator": "codigo_sms",\n  "representacao": { "menor": "filha", "vinculo_alegado": "pai" }\n}',
            resposta: '{\n  "titular_valido": true,\n  "representacao_confirmada": true,\n  "fonte": "matricula_educacao",\n  "em": "2026-08-31T20:16:11-03:00"\n}',
            base: 'Art. 18, §5º — verificar o requerente antes de entregar dado. Art. 14 — dado de menor só ao responsável legal, e no melhor interesse da criança.'
          });
          ticket('identidade', { tit: 'Acesso e eliminação · cidadão', kd: 'identidade e representação validadas', cli: 'prefeitura', cliNm: 'Sec. de Educação', chip: 'chip-ok', chipT: 'Validada' });
          evidencia('Identidade e representação legal validadas · DT-0415');
        },

        /* 4 — a consulta conversacional às secretarias */
        async () => {
          goto('solicitacoes');
          opSys('Fase alterada para <b>2. Em apuração</b> — Alterado por API');
          opEvent('<b>Consulta às secretarias</b> · a plataforma não acessa os sistemas do município: ela pergunta a quem responde por cada base, e consolida as respostas');
          setPhone({ title: 'Zelo · Consulta às secretarias', ini: 'ZP', sub: 'apuração do protocolo DT-0415' });
          waSys('Consulta enviada a 5 secretarias · protocolo DT-0415 · prazo interno de 48h');
          await sleep(450);
          waMsg('them', 'Bom dia. Protocolo <b>DT-0415</b>, pedido de acesso do cidadão Nivaldo Prata e de sua filha.<br><br>Preciso saber, da sua secretaria: <b>quais registros vocês mantêm sobre eles, com que finalidade e há quanto tempo.</b> Se não houver nenhum, a resposta “não temos” também é necessária.', 'Zelo · Encarregado');
          await sleep(500);
          waMsg('them', 'Educação: 11 registros. Matrícula, fila da creche desde março, posição 218.', 'Sec. de Educação', 'w2');
          await sleep(400);
          waMsg('them', 'Assistência: 7 registros no CadÚnico, cadastro ativo.', 'Assistência Social', 'w1');
          await sleep(400);
          waMsg('them', 'Fazenda: 4 registros. IPTU do imóvel, sem débito.', 'Sec. de Fazenda', 'w3');
          await sleep(400);
          waMsg('them', 'Saúde: 26 registros. Cartão do SUS e caderneta de vacinação da menor. Dado sensível — confirmei com a chefia antes de responder.', 'Sec. de Saúde', 'w4');
          await sleep(400);
          waMsg('them', 'Procuradoria: <b>não temos nada</b> sobre eles.', 'Procuradoria', 'w2');
          opMsg('agent', 'Cinco respostas, 48 registros. A Procuradoria voltou zerada — e isso entra no relatório, porque “não temos nada” também é informação que o cidadão tem direito de receber.', 'IA · Encarregado');
          ticket('apuracao', { tit: 'Acesso e eliminação · cidadão', kd: '5 secretarias consultadas · 48 registros', cli: 'prefeitura', cliNm: 'Assistência Social', chip: 'chip-ia', chipT: 'IA' });
          evidencia('Consulta às 5 secretarias concluída · 48 registros · DT-0415');
        },

        /* 4b — o que hoje é pergunta e o que poderia ser consulta */
        async () => {
          opInfo('Hoje é pergunta. O que poderia ser consulta.',
            '<div class="oq">A apuração levou <b>15 horas</b> porque depende de cinco pessoas responderem. ' +
            'Funciona sem integração nenhuma — e é por isso que a implantação leva semanas e não anos.<br><br>' +
            'Conforme cada sistema for conectado, a pergunta vira consulta e o prazo cai:<br>' +
            '· <b>Fazenda</b> — o tributário já tem webservice. Conectado, responderia em segundos.<br>' +
            '· <b>Educação</b> — o sistema de matrícula tem API. Conectado, responderia em segundos.<br>' +
            '· <b>Assistência</b> — o CadÚnico é base federal, consulta por convênio. Conectável com credencial.<br>' +
            '· <b>Saúde</b> — prontuário legado, sem API. <b>Segue sendo pergunta</b>, e provavelmente por muito tempo.<br>' +
            '· <b>Procuradoria</b> — não tem sistema. Sempre será pergunta.<br><br>' +
            'Três das cinco são conectáveis. Com elas ligadas, as mesmas 15 horas viram cerca de <b>40 minutos</b>, ' +
            'e o esforço humano fica só onde não há sistema. <b>O manual é o piso, não o teto.</b></div>');
          opMsg('human', 'Prefiro começar perguntando e conectar depois. Projeto que só entrega quando a última integração ficar pronta costuma não entregar.', 'Marina Aguiar · Encarregada');
          evidencia('Mapa de conectividade das secretarias registrado · 3 de 5 conectáveis');
        },

        /* 5 — o relatório entregue */
        async () => {
          goto('canal');
          setPhone({ title: 'Zelo · Encarregado da Prefeitura', ini: 'ZP', sub: 'canal oficial de privacidade' });
          await waTyping(1200);
          waMsg('them', 'Bom dia, senhor Nivaldo. A apuração está concluída. A prefeitura mantém <b>48 registros</b> sobre vocês dois, em quatro secretarias:<div class="wa-file"><span class="ic">PDF</span><div><b>relatorio-dados-DT-0415.pdf</b><span class="fm">Educação 11 · Saúde 26 · Assistência 7 · Fazenda 4 · Procuradoria 0</span></div></div>Os da Saúde são dados sensíveis — cartão do SUS e a caderneta de vacinação da sua filha — e só apareceriam para você, como responsável legal.<br><br>Sobre a fila: ela está na <b>posição 218</b> de 604 na creche do Bairro Alto, com entrada registrada em <b>março</b>.', 'Zelo · Encarregado');
          opMsg('agent', 'Pedido recebido às 20:14 de ontem, relatório entregue às 11:40 de hoje: <b>15 horas</b>. O prazo legal era de 15 dias.', 'IA · Encarregado');
          sess({ pv: 'Relatório de 48 registros entregue · 4 secretarias' });
          evidencia('Relatório de dados entregue ao cidadão · 48 registros');
        },

        /* 6 — a eliminação indeferida, e por que isso o protege */
        async () => {
          await waTyping(1300);
          waMsg('them', 'Passo agora ao pedido de <b>eliminação</b>. Nesse ponto preciso indeferir, e faço questão de explicar o motivo, porque ele é favorável ao senhor.<div class="wa-card"><b>Por que não dá</b>Seus dados não estão com a prefeitura porque você autorizou — estão porque a lei manda o município executar política pública com eles. Quando a base não é a sua autorização, apagar não é escolha sua nem nossa.</div><div class="wa-card"><b>E o efeito prático</b>Apagar o cadastro tiraria sua filha da fila e zeraria a antiguidade de março. Você perderia a posição 218.</div>O que <b>dá</b> para fazer: corrigir qualquer dado errado e desligar o que não é obrigatório.', 'Zelo · Encarregado');
          opEvent('<b>Eliminação indeferida com fundamentação</b> · base legal é execução de política pública (art. 7º, III) e obrigação legal (art. 7º, II) — não há eliminação a pedido quando a base não é consentimento (art. 16)');
          ticket('respondida', { tit: 'Acesso e eliminação · cidadão', kd: 'acesso atendido em 15h · eliminação indeferida com fundamento', cli: 'prefeitura', cliNm: 'Assistência Social', chip: 'chip-ok', chipT: 'No prazo' });
          lead.notas.push({ h: 'RESUMO DO ATENDIMENTO (01/09/2026 11:40 · protocolo DT-0415)', tx: 'Acesso atendido em 15 horas, com consulta às 5 secretarias e 48 registros. Eliminação indeferida por base legal de política pública, com explicação do efeito prático. Item de LAI encaminhado como chamado LAI-0452 à Sec. de Educação.' });
          evidencia('Eliminação indeferida com fundamentação · DT-0415');
          await sleep(350);
          waChoices(['Faz sentido. Quem já acessou meus dados?', 'Tem um endereço errado no cadastro'], choice => {
            vars.trilha = choice.startsWith('Faz sentido');
            advance(true);
          });
        },

        /* 7 — trilha de acesso ou correção propagada */
        async () => {
          waMsg('me', vars.trilha ? 'Faz sentido. Quem já acessou meus dados?' : 'Tem um endereço errado no cadastro');
          opMsg('client', vars.trilha ? 'Quer o extrato de quem acessou os dados dele' : 'Aponta endereço desatualizado no cadastro', 'Nivaldo Prata');
          await waTyping(1100);
          if (vars.trilha) {
            waMsg('them', 'Esse também é um direito seu. Nos últimos doze meses, <b>9 acessos</b> aos seus dados, todos por servidor identificado e com motivo registrado:<div class="wa-card"><b>Exemplo do que aparece</b>12/06 · Sec. de Educação · matrícula da fila · servidor edu-0447<br>03/05 · Assistência Social · revisão do CadÚnico · servidor as-0192</div>Envio o extrato completo em seguida. Caso algum desses acessos não lhe pareça justificado, informe-me e abrirei apuração.', 'Zelo · Encarregado');
            opEvent('<b>Extrato de acessos emitido</b> · 9 acessos em 12 meses, com servidor e motivo · em órgão público é o que responde “quem andou olhando meus dados”');
            evidencia('Extrato de trilha de acesso entregue ao cidadão · 9 acessos');
          } else {
            waMsg('them', 'Correção é direito seu e não tem prazo de espera — informe o endereço correto e eu atualizo nas <b>quatro secretarias de uma só vez</b>. Hoje, se a correção for feita apenas no balcão da Educação, a Saúde permanece com o dado antigo. É essa duplicidade que estamos eliminando.', 'Zelo · Encarregado');
            opEvent('<b>Correção propagada</b> · art. 18, III · atualização enviada às 4 secretarias que mantinham o registro, em vez de corrigir só na origem do pedido');
            evidencia('Correção de dado propagada a 4 secretarias · DT-0415');
          }
          waSys('✅ Atendimento concluído em 01/09/2026 às 11:40 · protocolo <b>DT-0415</b> · chamado LAI-0452 segue com a Secretaria');
          opSys('✅ O sistema concluiu o atendimento em 01/09/2026 às 11:40');
          sess({ pv: '✅ DT-0415 respondido em 15h', unread: 0 });
        },

        /* 8 — o que o gestor público leva disso */
        async () => {
          goto('conformidade');
          modal('DT-0415 · o que só acontece no município', `
            <p style="font-size:12px; color:var(--ink-soft); margin-bottom:10px">
              Pedido atendido em <b>15 horas</b> de um prazo de 15 dias, sem integração com sistema nenhum. O que
              pesou não foi a lei — foi a geografia do dado.
            </p>
            <div class="tline"><span class="pt warn"></span><div class="tx"><b>O cidadão é titular em cinco lugares ao mesmo tempo</b><i>Educação, Saúde, Assistência, Fazenda e Procuradoria — e a plataforma pergunta a cada uma, porque não acessa os sistemas</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>A resposta parcial é o que vira reclamação</b><i>responder só pela secretaria que recebeu o pedido é o erro mais comum</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>Dado de menor exige responsável legal verificado</b><i>art. 14 · o vínculo foi conferido na matrícula, não declarado</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>Eliminação indeferida sem enrolação</b><i>a base é política pública (art. 7º, III) — e apagar tiraria a filha da fila</i></div></div>
            <div class="tline"><span class="pt"></span><div class="tx"><b>O que não era LGPD saiu do caminho em 1 passo</b><i>gasto público virou chamado LAI-0452 na Secretaria, com prazo próprio</i></div></div>`);
          set('#kNovas', '42');
          set('#barHojeN', '5');
          const b = document.getElementById('barHoje'); if (b) b.style.height = '52px';
          evidencia('Protocolo DT-0415 concluído · resposta em 21 minutos');
          finish();
        }
      ];
    }
  },

  /* ================================================================
     2 · Consentimento — o cidadão puxa o assunto
     ================================================================ */
  {
    id: 'consentimento',
    label: 'Consentimento na conversa',
    scenarioLabel: 'Santa Rita · “quem autorizou vocês a me mandarem mensagem?”',
    phoneLabel: 'Cidadã',
    cliente: 'prefeitura',
    modInicial: 'home',
    protocoloId: 'DT-0416',
    persona: { nm: 'Iolanda Freire', ini: 'IF', tel: '+55 32 9• ••••-••31' },
    wa: { title: 'Encarregado · Prefeitura de Santa Rita', ini: 'EN', sub: 'canal de privacidade' },
    intro: '<strong>Ninguém disparou nada aqui.</strong> A Iolanda procura o canal do Encarregado e vai direto ao ponto: “a prefeitura me manda mensagem quase toda semana e eu não lembro de ter autorizado nada”. No município a resposta é diferente para cada finalidade — e <strong>quase nenhuma depende de autorização</strong>, o que é justamente o que precisa ser explicado. Clique em <strong>Iniciar simulação</strong>.',

    steps({ waMsg, waTyping, waSys, waChoices, opMsg, opSys, opEvent, opTrack, opHead, sess, goto, ticket, lead, modal, set, bar, rowAdd, evidencia, sleep, finish, advance, vars, persona }) {

      lead.tit = 'Ajuste de bases legais pelo cidadão';
      lead.cliNm = 'Prefeitura de Santa Rita';
      lead.tag = 'REVOGACAO';
      lead.prazo = 'imediato · art. 18, IX e art. 8º, §5º';

      return [

        /* 1 — a cidadã procura o canal do Encarregado */
        async () => {
          goto('canal');
          waSys('📥 Atendimento iniciado em 31/08/2026 às 10:02 no canal <b>Encarregado · Prefeitura de Santa Rita</b>');
          waMsg('me', 'Bom dia. A prefeitura me manda mensagem quase toda semana e eu não lembro de ter autorizado nada. <b>Quem autorizou isso?</b> E como faço para parar?');
          await sleep(380);
          sess({ tag: 'BASE_LEGAL', pv: 'Quer saber quem autorizou as mensagens do município', unread: 1, eq: 'Privacidade' });
          opHead({ nm: 'Iolanda Freire', ini: 'IF', tag: 'BASE_LEGAL', st: 'WhatsApp · ' + persona.tel + ' · Equipe Privacidade', chip: 'chip-ia', chipT: 'IA' });
          opSys('📥 Atendimento iniciado às 10:02 no <b>canal do Encarregado</b> · protocolo <b>#2026083100152</b> · conversa iniciada pela cidadã');
          opMsg('client', 'A prefeitura me manda mensagem quase toda semana. Quem autorizou isso? Como faço para parar?', 'Iolanda Freire');
          opEvent('<b>Informações do contato</b> · titular identificada pelo telefone · pedido classificado como <b>art. 9º + art. 18, IX</b> (informação sobre o tratamento e revogação)', {
            hab: 'Informações do contato',
            op: 'Identificar_Titular_E_Classificar',
            dur: '0,44s',
            envio: '{\n  "canal": "encarregado",\n  "telefone": "+5532XXXXXX31",\n  "texto": "quem autorizou as mensagens e como parar"\n}',
            resposta: '{\n  "titular_id": "SRV-40217",\n  "classificacao": ["informacao_sobre_tratamento","revogacao"],\n  "protocolo": "2026083100152",\n  "prazo": "imediato"\n}',
            base: 'O contato chega ao canal do Encarregado (art. 41), que trata exclusivamente de privacidade e proteção de dados — não é o canal de serviços da prefeitura.'
          });
          ticket('recebida', { tit: 'Ajuste de bases legais', kd: 'aberto pela própria conversa · sem formulário', cli: 'prefeitura', cliNm: 'Gabinete', chip: 'chip-ia', chipT: 'IA' });
          evidencia('Cidadã questionou base legal no canal do Encarregado · protocolo DT-0416');
        },

        /* 2 — o canal diz o que é e o que não é */
        async () => {
          await waTyping(1100);
          waMsg('them', 'Bom dia, senhora Iolanda. Sou o assistente da Encarregada de dados da Prefeitura de Santa Rita.<br><br>A senhora autorizou uma parte, e a outra parte não depende de autorização. Vou lhe mostrar, uma a uma, de onde vem cada mensagem que a senhora recebe — e o que pode ser desligado.<div class="wa-card"><b>Protocolo aberto</b>#2026083100152 · registrado no canal do Encarregado</div>', 'Zelo · Encarregado');
          opMsg('agent', 'A cidadã foi direto ao ponto e a resposta vai direto também. A identidade do canal já está no cabeçalho da conversa e no registro do atendimento — repetir isso por escrito só atrasaria a resposta.', 'IA · Encarregado');
          evidencia('Escopo do canal do Encarregado informado à titular');
        },

        /* 3 — extrato de bases legais em linguagem de gente */
        async () => {
          goto('consentimentos');
          await waTyping(1300);
          waMsg('them', 'A pergunta é pertinente, e a resposta é diferente para cada caso. Atualmente a prefeitura entra em contato com a senhora por <b>três motivos</b>, e cada um tem origem distinta:<div class="wa-consent"><div class="cr"><span>Convocação de vacinação</span><b>saúde pública</b></div><div class="cr"><span>Aviso de IPTU e dívida</span><b>obrigação legal</b></div><div class="cr"><span>Informativo do gabinete</span><b>a senhora autorizou</b></div></div>As duas primeiras <b>não dependem</b> da sua autorização — a lei manda o município avisar, e eu não posso desligar. O informativo é escolha sua: a senhora marcou “sim” em <b>14/03/2026</b>, no balcão da Fazenda.', 'Zelo · Encarregado');
          opEvent('<b>Consultar servidor MCP · Santa Rita</b> — extrato de bases legais da titular, por finalidade', {
            mcp: 'MCP Santa Rita · registro de bases legais',
            op: 'Consultar_Bases_Legais_do_Titular',
            dur: '0,58s',
            envio: '{\n  "titular_id": "SRV-40217"\n}',
            resposta: '{\n  "finalidades": [\n    { "nome": "vacinacao", "base": "tutela_da_saude", "desligavel": false },\n    { "nome": "iptu_e_divida", "base": "obrigacao_legal", "desligavel": false },\n    { "nome": "informativo_gabinete", "base": "consentimento", "origem": "balcao_fazenda", "em": "2026-03-14", "aviso": "v2", "desligavel": true }\n  ]\n}',
            base: 'Art. 9º — acesso facilitado à informação sobre o tratamento, com a finalidade específica e a base legal de cada uma.'
          });
          evidencia('Extrato de bases legais entregue à cidadã na conversa');
          await sleep(350);
          waChoices(['Quero ver o que eu autorizei', 'Quero parar o informativo'], choice => {
            vars.prova = choice.startsWith('Quero ver');
            advance(true);
          });
        },

        /* 4 — a prova entregue à própria titular */
        async () => {
          waMsg('me', vars.prova ? 'Quero ver o que eu autorizei' : 'Quero parar o informativo');
          opMsg('client', vars.prova ? 'Quer ver a prova do consentimento' : 'Quer parar o informativo', 'Iolanda Freire');
          if (vars.prova) {
            await waTyping(1100);
            waMsg('them', 'Segue o registro completo, incluindo <b>o texto exato que foi exibido à senhora</b> naquela data:<div class="wa-card"><b>14/03/2026, 10h22 · balcão da Fazenda</b>“Posso te mandar por WhatsApp o informativo com obras, vagas e campanhas do município? Você pode desfazer quando quiser.”<br>A senhora respondeu: <b>Pode</b>.<br>Aviso de privacidade v2 · registro 7c02f1a9</div>Não é apenas uma marcação de “autorizado” no sistema: é a pergunta feita, a sua resposta e o horário exato.', 'Zelo · Encarregado');
            opMsg('agent', 'Prova apresentada à própria titular, com o texto exato exibido na coleta. O ônus da prova do consentimento é do controlador (art. 8º, §2º) — aqui ele é cumprido na hora.', 'IA · Encarregado');
          } else {
            await waTyping(800);
            waMsg('them', 'Certo, providencio o desligamento. Antes disso, permita-me esclarecer o que muda e o que permanece.', 'Zelo · Encarregado');
          }
          evidencia('Prova de consentimento exibida à titular · registro 7c02f1a9');
        },

        /* 5 — o ajuste por finalidade, dentro da conversa */
        async () => {
          await waTyping(950);
          waMsg('them', 'A senhora decide sobre o que é opcional. E garanto desde já: <b>desligar não trava nada</b> — seu IPTU, sua vacina e qualquer serviço da prefeitura seguem iguais.', 'Zelo · Encarregado');
          ticket('apuracao', { tit: 'Ajuste de bases legais', kd: 'titular escolhendo finalidade a finalidade', cli: 'prefeitura', cliNm: 'Gabinete', chip: 'chip-ia', chipT: 'IA' });
          await sleep(350);
          waChoices(['Desligar o informativo', 'Deixa como está'], choice => {
            vars.desliga = choice.startsWith('Desligar');
            advance(true);
          });
        },

        /* 6 — registro, propagação e o que não desliga */
        async () => {
          waMsg('me', vars.desliga ? 'Desligar o informativo' : 'Deixa como está');
          opMsg('client', vars.desliga ? 'Desligar o informativo' : 'Deixa como está', 'Iolanda Freire');
          if (vars.desliga) {
            opEvent('<b>Revogação processada em 8 segundos</b> e propagada aos sistemas do município', {
              hab: 'Registro de preferência por finalidade',
              op: 'Registrar_Preferencia_Por_Finalidade',
              dur: '0,31s',
              envio: '{\n  "titular_id": "SRV-40217",\n  "finalidade": "informativo_gabinete",\n  "manifestacao": "revogar",\n  "canal": "whatsapp",\n  "dentro_da_conversa": "2026083100152",\n  "aviso_versao": "v2"\n}',
              resposta: '{\n  "revogado": true,\n  "em": "2026-08-31T10:07:29-03:00",\n  "propagado": ["gabinete","comunicacao","sms"],\n  "hash_prova": "a91f3c7e",\n  "vacinacao_e_iptu": "mantidos · base legal propria"\n}',
              base: 'Art. 8º, §5º — a revogação é gratuita e facilitada. Aqui custa o mesmo que o aceite custou: uma frase, na mesma conversa.'
            });
            rowAdd('#tblProva', '<td class="mono">agora</td><td>Revogação · Iolanda Freire · informativo</td><td>WhatsApp · v2 · na conversa · hash a91f…</td>', 'new');
            set('#cRevog', '312');
            set('#cValidos', '21.479');
          }
          await waTyping(900);
          waMsg('them', vars.desliga
            ? 'Concluído em <b>8 segundos</b>. O informativo foi desligado.<br><br>O que <b>continua</b> é a convocação de vacinação e o aviso de IPTU, porque isso a lei manda o município fazer. Não é publicidade, é serviço.'
            : 'Certo, o registro permanece como está. E o registro da nossa conversa de hoje já foi gravado — se mudar de ideia, é só me dizer aqui.',
            'Zelo · Encarregado');
          sess({ pv: vars.desliga ? '✔ Informativo desligado em 8s' : 'Consentimento reafirmado na conversa' });
          evidencia(vars.desliga ? 'Revogação registrada e propagada · Iolanda Freire' : 'Consentimento reafirmado com nova prova · Iolanda Freire');
        },

        /* 7 — o momento da coleta, feito do jeito que vale */
        async () => {
          await waTyping(1200);
          waMsg('them', 'Já que estamos tratando do assunto, permita-me <b>uma única pergunta</b>. Uma recusa é perfeitamente aceitável.<br><br>A senhora tem neta na fila da creche. <b>Posso te avisar quando abrirem vagas no seu bairro?</b><div class="wa-card"><b>Só isso, e nada além</b>Não te inscreve em informativo nenhum, não muda o que combinamos agora, e a senhora desfaz quando quiser.</div>', 'Zelo · Encarregado');
          opMsg('agent', 'Pedido de consentimento feito no único lugar em que ele é válido de origem: dentro de uma conversa que já tinha base legal, com finalidade única e nomeada, sem condicionar serviço nenhum.', 'IA · Encarregado');
          await sleep(350);
          waChoices(['Pode avisar', 'Não, obrigada'], choice => {
            vars.aceitou = choice === 'Pode avisar';
            advance(true);
          });
        },

        /* 8 — o aceite e a recusa valem o mesmo */
        async () => {
          waMsg('me', vars.aceitou ? 'Pode avisar' : 'Não, obrigada');
          opMsg('client', vars.aceitou ? 'Pode avisar' : 'Não, obrigada', 'Iolanda Freire');
          opEvent(vars.aceitou
            ? '<b>Consentimento colhido</b> · finalidade “aviso de vaga em creche” · texto exibido arquivado junto da resposta'
            : '<b>Recusa registrada</b> · finalidade “aviso de vaga em creche” · o não vale tanto quanto o sim e impede a repergunta', {
            hab: vars.aceitou ? 'Coleta de consentimento' : 'Registro de recusa',
            op: vars.aceitou ? 'Registrar_Consentimento' : 'Registrar_Recusa',
            dur: '0,27s',
            envio: '{\n  "titular_id": "SRV-40217",\n  "finalidade": "aviso_vaga_creche",\n  "texto_exibido": "Posso te avisar quando abrirem vagas no seu bairro?",\n  "resposta": "' + (vars.aceitou ? 'Pode avisar' : 'Nao, obrigada') + '",\n  "condicionado": false,\n  "aviso_versao": "v2"\n}',
            resposta: '{\n  "registrado": true,\n  "consentido": ' + (vars.aceitou ? 'true' : 'false') + ',\n  "hash_prova": "' + (vars.aceitou ? 'd45b90e1' : 'f18c26b7') + '",\n  "reperguntar_antes_de": "' + (vars.aceitou ? '—' : '2027-08-31') + '"\n}',
            base: vars.aceitou
              ? 'Art. 8º · consentimento livre, informado e inequívoco, para finalidade determinada. E nada condicionado: recusar não pode travar acesso a serviço público.'
              : 'A recusa é evidência tão importante quanto o aceite: prova que foi perguntado, prova que não houve consentimento e bloqueia a insistência.'
          });
          rowAdd('#tblFinal', '<td><b>Aviso de vaga em creche</b><span class="sub">Iolanda Freire · colhido na conversa</span></td><td>' + (vars.aceitou ? 'Consentimento (art. 7º, I)' : '<b style="color:var(--bad)">Recusado pela titular</b>') + '</td><td>1</td><td><span class="chip ' + (vars.aceitou ? 'chip-ok">Válida' : 'chip-bad">Bloqueada') + '</span></td>', 'new');
          rowAdd('#tblProva', '<td class="mono">agora</td><td>' + (vars.aceitou ? 'Consentimento' : 'Recusa') + ' · Iolanda Freire · vaga em creche</td><td>WhatsApp · v2 · texto arquivado · hash ' + (vars.aceitou ? 'd45b…' : 'f18c…') + '</td>', 'new');
          ticket('respondida', { tit: 'Ajuste de bases legais', kd: 'resolvido na própria conversa · 7min', cli: 'prefeitura', cliNm: 'Gabinete', chip: 'chip-ok', chipT: 'Concluído' });
          evidencia((vars.aceitou ? 'Consentimento colhido' : 'Recusa registrada') + ' · aviso de vaga em creche · Iolanda Freire');
        },

        /* 9 — de onde vem o consentimento do município inteiro */
        async () => {
          goto('consentimentos');
          bar('#capA', 64, '7.240'); const a = document.getElementById('capAV'); if (a) a.textContent = '7.240';
          await sleep(280);
          bar('#capB', 24, '2.716'); const b = document.getElementById('capBV'); if (b) b.textContent = '2.716';
          await sleep(240);
          bar('#capC', 11, '1.244'); const c = document.getElementById('capCV'); if (c) c.textContent = '1.244';
          await sleep(240);
          bar('#capD', 1, '96'); const d = document.getElementById('capDV'); if (d) d.textContent = '96';
          opMsg('human', 'Dois em cada três consentimentos do município nascem assim: numa conversa que o cidadão começou por outro motivo. Não é sorte — é a única forma que sobrevive a uma auditoria.', 'Marina Aguiar · Encarregada');
          await sleep(300);
          opMsg('human', 'Para base fria o número é zero, e vai continuar sendo: se eu preciso de permissão para falar com a pessoa, não posso falar com ela para pedir permissão.', 'Marina Aguiar · Encarregada');
          waSys('✅ Atendimento concluído · protocolo <b>#2026083100152</b>');
          opSys('✅ O sistema concluiu o atendimento em 31/08/2026 às 10:09');
          evidencia('Mapa de origem dos consentimentos atualizado · Santa Rita');
          finish();
        }
      ];
    }
  },

  /* ================================================================
     3 · Incidente de segurança (art. 48)
     ================================================================ */
  {
    id: 'incidente',
    label: 'Incidente de segurança',
    scenarioLabel: 'Santa Rita · das 2h14 da madrugada às 12.400 famílias comunicadas',
    phoneLabel: 'Envolvidos',
    cliente: 'prefeitura',
    modInicial: 'home',
    protocoloId: 'INC-0007',
    persona: { nm: 'Iolanda Freire', ini: 'IF', tel: '+55 32 9• ••••-••31' },
    wa: { title: 'Resposta a Incidente · Zelo', ini: 'RI', sub: 'Marina, Bruno (TI), Dra. Izabelly (advogada externa)' },
    waAbertura: 'Hoje · 02:14',
    intro: '<strong>O relógio começa quando você descobre, não quando decide agir.</strong> A comunicação à ANPD e aos titulares tem prazo de <strong>3 dias úteis</strong> (Res. CD/ANPD nº 15/2024), e no município ainda entra a prestação de contas à Controladoria. Clique em <strong>Iniciar simulação</strong> e acompanhe um vazamento do CadÚnico da detecção automática até a última família comunicada.',

    steps({ waMsg, waTyping, waSys, waChoices, opMsg, opSys, opEvent, opHead, sess, goto, ticket, lead, modal, set, bar, stepOn, clock, rowAdd, setPhone, evidencia, sleep, finish, advance, vars }) {

      lead.tit = 'Incidente · exportação não autorizada';
      lead.cliNm = 'Prefeitura de Santa Rita';
      lead.tag = 'INCIDENTE';
      lead.prazo = '3 dias úteis · Res. CD/ANPD 15/2024';

      return [

        /* 1 — detecção: o item nasce no painel */
        async () => {
          goto('incidentes');
          clock('#clkAnpd', '02:59:41', '<b>Data de validade do item.</b> 3 dias úteis a partir do conhecimento do incidente (Res. CD/ANPD nº 15/2024). Contagem iniciada automaticamente na detecção, às 02:14.');
          stepOn('#stpInc', 0);
          set('#incBox', '<b style="color:var(--bad)">INC-0007 · exportação não autorizada</b><br><span style="color:var(--ink-soft)">Base do CadÚnico com 12.400 famílias exportada às 02:14 por credencial de servidor exonerado em 12/08. <b>Identificado por Bruno Tavares (TI)</b>, de plantão, que registrou o caso às 02:26.</span>');
          set('#incId', 'INC-0007');
          set('#incTit', 'Exportação não autorizada · base do CadÚnico');
          set('#incKd', 'identificado às 02:14 e registrado às 02:26 · 12.400 famílias · data de validade: 03/09');
          set('#incFase', 'Detecção');
          set('#incResp', 'Marina Aguiar · Encarregada');
          set('#incOrig', 'Origem: registrado por Bruno Tavares (TI) · plantão · 02:26');
          const chipFase = document.getElementById('incFase'); if (chipFase) chipFase.className = 'chip chip-bad';
          opSys('📄 Caso registrado às 02:26 por <b>Bruno Tavares (TI)</b>, de plantão · <b>item INC-0007 aberto no painel Incidentes</b>');
          opEvent('<b>Item de painel criado</b> · etiquetas <span class="tag">DADO_SENSIVEL</span> <span class="tag">POPULACAO_VULNERAVEL</span> · data de validade 03/09 (3 dias úteis)');
          evidencia('Item INC-0007 aberto a partir do registro de Bruno Tavares (TI)');
        },

        /* 2 — sala de guerra: função Grupos do ArtONE */
        async () => {
          goto('canal');
          waSys('Marina Aguiar criou o grupo <b>Resposta a Incidente · INC-0007</b>');
          waSys('Bruno Tavares e Dra. Izabelly Nunes (advogada externa) entraram no grupo');
          waMsg('them', '🚨 <b>INC-0007</b> · exportação da base do CadÚnico às 02:14. Credencial de servidor exonerado. Estou acordando o time agora.', 'Marina · Encarregada', 'w4');
          await sleep(400);
          waMsg('them', 'Já estou no console. Vou revogar a credencial e encerrar as sessões ativas.', 'Bruno · TI Santa Rita', 'w2');
          await sleep(350);
          waMsg('them', 'Recomendo preservar o log antes de qualquer outra medida. É ele que sustenta a comunicação à ANPD e à Controladoria — e é a primeira prova pedida se o caso for judicializado.', 'Dra. Izabelly · advogada externa', 'w1');
          opEvent('<b>Grupo do WhatsApp criado pela plataforma</b> · canal dono: Santa Rita · acesso: equipe Resposta a incidente · moderadora: Marina Aguiar · etiqueta <span class="tag">INC-0007</span>', {
            hab: 'Grupos do WhatsApp',
            op: 'Criar_Grupo',
            dur: '1,04s',
            envio: '{\n  "nome": "Resposta a Incidente - INC-0007",\n  "canal_dono": "santa_rita_oficial",\n  "moderadores": ["marina.aguiar"],\n  "membros": ["marina.aguiar","bruno.tavares","izabelly.nunes(externa)"],\n  "etiquetas": ["INC-0007"]\n}',
            resposta: '{\n  "criado": true,\n  "membros": 3,\n  "conversas_tarifadas": 3,\n  "obs": "grupo tarifa uma conversa de 24h por membro",\n  "entradas_registradas_no_historico": true\n}',
            base: 'Grupo, e não chat interno: a advogada externa não é usuária da conta e o TI é da prefeitura, enquanto o Encarregado é do escritório — chat interno só liga usuários da mesma conta. Às 2h14, o que acorda gente é o WhatsApp.'
          });
          opMsg('agent', 'Primeira resposta em 4 minutos, de madrugada. Entrada e saída de participante viram mensagem de sistema no histórico da conversa.', 'IA · Resposta a incidente');
          evidencia('Grupo de resposta a incidente criado · 3 participantes · vinculado ao INC-0007');
        },

        /* 3 — contenção */
        async () => {
          goto('incidentes');
          stepOn('#stpInc', 1);
          set('#incFase', 'Contenção');
          set('#incKd', 'contido às 02:40 · 26 min entre detecção e corte de acesso');
          clock('#clkAnpd', '02:33:12', '<b>Data de validade do item.</b> Contenção concluída às 02:40 — 26 minutos entre detecção e corte de acesso.');
          opEvent('<b>Contenção registrada</b> · credencial revogada, sessões encerradas, log preservado com hash', {
            hab: 'Contenção de incidente',
            op: 'Conter_Incidente',
            dur: '1,12s',
            envio: '{\n  "incidente": "INC-0007",\n  "acoes": ["revogar_credencial","encerrar_sessoes","preservar_log"]\n}',
            resposta: '{\n  "credencial_revogada": true,\n  "sessoes_encerradas": 2,\n  "log_hash": "e77b21ac9f",\n  "em": "2026-08-30T02:40:44-03:00"\n}',
            base: 'Art. 46 — medidas de segurança aptas a proteger os dados. A contenção e o horário exato entram no relatório à ANPD.'
          });
          evidencia('Contenção do INC-0007 concluída em 26 minutos');
        },

        /* 4 — avaliação de risco */
        async () => {
          stepOn('#stpInc', 2);
          set('#incFase', 'Avaliação de risco');
          bar('#incAfet', 100, '12.400');
          const a = document.getElementById('incAfetV'); if (a) a.textContent = '12.400';
          opEvent('<b>Avaliação de risco</b> · composição familiar, renda, endereço e laudo social de <b>12.400 famílias em situação de vulnerabilidade</b> → <b>risco relevante</b>: comunicação obrigatória à ANPD e aos titulares');
          set('#incBox', '<b style="color:var(--bad)">INC-0007 · risco relevante</b><br><span style="color:var(--ink-soft)">12.400 famílias. Categorias: identificação, socioeconômica e <b>laudo social</b>. População vulnerável agrava o risco. Comunicação obrigatória.</span>');
          opMsg('human', 'Dado de família em vulnerabilidade na mão errada vira golpe de benefício. Não tem margem para avaliar como risco baixo.', 'Marina Aguiar · Encarregada');
          evidencia('Avaliação de risco do INC-0007 · classificado como risco relevante');
        },

        /* 5 — a minuta que a IA monta e o humano assina */
        async () => {
          stepOn('#stpInc', 3);
          set('#incFase', 'Comunicação à ANPD');
          opEvent('<b>Minuta de comunicação à ANPD</b> gerada com os campos exigidos · aguardando aprovação da Encarregada', {
            hab: 'Comunicação de incidente à ANPD',
            op: 'Gerar_Comunicacao_ANPD',
            dur: '2,41s',
            envio: '{\n  "incidente": "INC-0007",\n  "controlador": "Prefeitura de Santa Rita do Vale",\n  "titulares_afetados": 12400\n}',
            resposta: '{\n  "campos": {\n    "natureza": "acesso e exportacao nao autorizados",\n    "categorias_dados": ["identificacao","socioeconomico","laudo_social"],\n    "numero_titulares": 12400,\n    "agravante": "populacao_em_vulnerabilidade",\n    "medidas_tecnicas": ["revogacao_credencial","encerramento_sessoes","preservacao_log"],\n    "data_conhecimento": "2026-08-30T02:14:00-03:00"\n  },\n  "pendente": "aprovacao_do_encarregado"\n}',
            base: 'Art. 48 — comunicação à autoridade nacional e ao titular em prazo razoável, com os elementos do §1º. No município, cópia à Controladoria.'
          });
          await sleep(300);
          opMsg('human', 'Revisei e aprovo. Comunicação à ANPD enviada às 08:12, e cópia para a Controladoria no mesmo ato. Dentro do prazo, com folga de dois dias.', 'Marina Aguiar · Encarregada');
          clock('#clkAnpd', 'comunicado', '<b>ANPD comunicada às 08:12 de 30/08</b>, com cópia à Controladoria. Prazo era até 03/09 — folga de 2 dias úteis, com a linha do tempo inteira anexada.', true);
          evidencia('Comunicação à ANPD enviada e protocolada · INC-0007');
        },

        /* 6 — comunicar 12.400 famílias no canal em que elas já falam */
        async () => {
          stepOn('#stpInc', 4);
          set('#incFase', 'Comunicação aos cidadãos');
          goto('canal');
          setPhone({ title: 'Prefeitura de Santa Rita', ini: 'SR', sub: 'canal do cidadão' });
          waSys('Você saiu da visão do grupo de resposta · agora no WhatsApp de <b>Iolanda Freire</b>, cidadã de Santa Rita');
          waMsg('them', 'Senhora Iolanda, aqui é a Prefeitura de Santa Rita, com um aviso sério.<br><br>Na madrugada de ontem alguém acessou sem autorização o cadastro do CadÚnico, onde estão <b>seus dados</b> e os da sua família. O acesso foi cortado em 26 minutos e comunicamos a ANPD hoje de manhã.<div class="wa-card"><b>O que você deve fazer</b>Desconfie de ligação ou mensagem citando seus dados ou prometendo benefício. A prefeitura nunca pede senha nem PIX por telefone.</div>Permanecemos à disposição para esclarecimentos, a qualquer horário.', 'Prefeitura de Santa Rita');
          opHead({ nm: 'Iolanda Freire', ini: 'IF', tag: 'INCIDENTE', st: 'WhatsApp · +55 32 9• ••••-••31 · Equipe Resposta a incidente', chip: 'chip-ia', chipT: 'IA' });
          bar('#incCom', 100, '12.400');
          const c = document.getElementById('incComV'); if (c) c.textContent = '12.400';
          opSys('Comunicação aos titulares disparada · 12.400 famílias · template aprovado · entrega em 22 minutos');
          evidencia('12.400 famílias comunicadas por WhatsApp · INC-0007');
          await sleep(400);
          waChoices(['Vou perder meu benefício?', 'Ok, obrigada por avisar'], choice => {
            vars.duvida = choice.startsWith('Vou perder');
            advance(true);
          });
        },

        /* 7 — a dúvida atendida na hora */
        async () => {
          waMsg('me', vars.duvida ? 'Vou perder meu benefício?' : 'Ok, obrigada por avisar');
          opMsg('client', vars.duvida ? 'Vou perder meu benefício?' : 'Ok, obrigada por avisar', 'Iolanda Freire');
          await waTyping(1000);
          waMsg('them', vars.duvida
            ? 'Não, senhora Iolanda. <b>Seu benefício não sofre nenhuma alteração</b> — o cadastro continua ativo e o pagamento segue normal. O que aconteceu foi alguém ver os dados sem poder ver, não mexer neles.<br><br>O risco real é golpe: se alguém ligar dizendo que precisa de dado ou de PIX para “liberar” o benefício, é golpe. A prefeitura nunca faz isso.'
            : 'Agradecemos a compreensão, senhora Iolanda. Caso receba qualquer contato suspeito citando seus dados, procure-nos por este mesmo número.',
            'Prefeitura de Santa Rita');
          bar('#incDuv', 26, '3.180');
          const d = document.getElementById('incDuvV'); if (d) d.textContent = '3.180';
          opMsg('agent', '3.180 dúvidas atendidas pelo agente nas primeiras 6 horas. 84 escalonadas para a Assistência. A pergunta que mais apareceu foi exatamente essa: “vou perder meu benefício?”.', 'IA · Resposta a incidente');
          sess({ tag: 'INCIDENTE', pv: 'Dúvida sobre a comunicação · respondida', eq: 'Resposta a incidente' });
          evidencia('Canal de dúvidas do incidente · 3.180 famílias atendidas');
        },

        /* 8 — encerramento com a linha do tempo */
        async () => {
          goto('incidentes');
          stepOn('#stpInc', 5);
          set('#incFase', 'Encerrado');
          const chipFim = document.getElementById('incFase'); if (chipFim) chipFim.className = 'chip chip-ok';
          set('#incKd', 'encerrado em 30/08 18:00 · comunicado dentro do prazo');
          set('#incBox', '<b style="color:var(--ok)">INC-0007 · encerrado</b><br><span style="color:var(--ink-soft)">Detecção 02:14 · contenção 02:40 · ANPD e Controladoria 08:12 · titulares 08:40 · encerrado 30/08 18:00. Plano de ação: revogação de acesso no ato da exoneração e MFA obrigatório na exportação.</span>');
          modal('INC-0007 · histórico do item · painel Incidentes', `
            <p style="font-size:11.5px; color:var(--ink-faint); margin-bottom:9px">
              É o histórico do item de painel, do jeito que o ArtONE grava: cada movimento com autor e horário,
              e “Alterado por API” quando quem moveu foi a automação.
            </p>
            <div class="tline"><span class="pt warn"></span><div class="tx"><b>02:26 · Registrado por quem identificou</b><i>Bruno Tavares, TI, de plantão · credencial de servidor exonerado</i></div></div>
            <div class="tline"><span class="pt"></span><div class="tx"><b>02:18 · Grupo de resposta aberto</b><i>Encarregada, TI e advogada externa no WhatsApp</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>02:40 · Contenção concluída</b><i>26 minutos · log preservado com hash e77b21ac9f</i></div></div>
            <div class="tline"><span class="pt warn"></span><div class="tx"><b>06:50 · Risco classificado como relevante</b><i>população em vulnerabilidade entre os afetados</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>08:12 · ANPD e Controladoria comunicadas</b><i>prazo até 03/09 · 2 dias úteis de folga</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>08:40 · 12.400 famílias comunicadas</b><i>entrega em 22 minutos · 3.180 dúvidas atendidas</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>18:00 · Encerrado com plano de ação</b><i>revogação no ato da exoneração e MFA na exportação</i></div></div>`);
          evidencia('Relatório final do INC-0007 emitido com linha do tempo completa');
          finish();
        }
      ];
    }
  },

  /* ================================================================
     4 · Inventário por entrevista com as secretarias
     ================================================================ */
  {
    id: 'inventario',
    label: 'Inventário por entrevista',
    scenarioLabel: 'Santa Rita · a planilha parada que virou conversa de WhatsApp',
    phoneLabel: 'Secretaria',
    cliente: 'prefeitura',
    modInicial: 'home',
    protocoloId: 'RP-0117',
    persona: { nm: 'Silvana Rocha', ini: 'SR', tel: '+55 32 9• ••••-••05' },
    wa: { title: 'Zelo · Governança', ini: 'ZP', sub: 'entrevista de inventário' },
    intro: '<strong>Todo inventário morre do mesmo jeito:</strong> vira planilha, envelhece e ninguém responde o formulário de revisão. Aqui o agente entrevista o dono de cada secretaria pelo WhatsApp e o registro se atualiza sozinho. Clique em <strong>Iniciar simulação</strong>.',

    steps({ waMsg, waTyping, waSys, waChoices, opMsg, opSys, opEvent, opHead, sess, goto, ticket, lead, modal, set, bar, rowAdd, evidencia, sleep, finish, advance, vars }) {

      lead.tit = 'Revisão de inventário · Sec. de Educação';
      lead.cliNm = 'Prefeitura de Santa Rita';
      lead.tag = 'INVENTARIO';
      lead.prazo = 'revisão anual · art. 37';

      return [

        /* 1 — o diagnóstico */
        async () => {
          goto('inventario');
          opSys('Prefeitura de Santa Rita · <b>11 operações com revisão vencida</b> há mais de 12 meses. Formulário por e-mail enviado 2 vezes, sem resposta.');
          opMsg('human', 'Registro de tratamento desatualizado não é papelada atrasada: é o município não saber o que trata. Vou disparar a entrevista pelo WhatsApp.', 'Marina Aguiar · Encarregada');
          evidencia('Ciclo de revisão do inventário iniciado · 9 secretarias');
        },

        /* 2 — a entrevista começa */
        async () => {
          goto('canal');
          waSys('Sequência <b>Revisão de inventário · 2º semestre</b> iniciada · 9 secretarias');
          await waTyping(900);
          waMsg('them', 'Olá, Silvana. Bom dia. Aqui é o assistente de governança da Prefeitura.<br><br>São <b>sete perguntas</b> sobre o que a Secretaria de Educação faz com dado de aluno. Cerca de quatro minutos, e pode responder quando lhe for conveniente.<br><br>A primeira é sobre a matrícula: vocês ainda pedem <b>comprovante de renda</b> do responsável?', 'Zelo · Governança');
          opHead({ nm: 'Silvana Rocha', ini: 'SR', tag: 'INVENTARIO', st: 'WhatsApp · +55 32 9• ••••-••05 · Equipe Governança', chip: 'chip-ia', chipT: 'IA' });
          opMsg('agent', 'Entrevista iniciada · 7 perguntas derivadas das operações já registradas da Secretaria de Educação.', 'IA · Governança');
          sess({ tag: 'INVENTARIO', pv: 'Entrevista de inventário · 1 de 7', eq: 'Governança' });
          await sleep(350);
          waChoices(['Não, paramos ano passado', 'Sim, ainda pedimos'], choice => {
            vars.renda = choice.startsWith('Sim');
            advance(true);
          });
        },

        /* 3 — a resposta atualiza o registro */
        async () => {
          waMsg('me', vars.renda ? 'Sim, ainda pedimos' : 'Não, paramos ano passado');
          opMsg('client', vars.renda ? 'Sim, ainda pedimos' : 'Não, paramos ano passado', 'Silvana Rocha');
          await waTyping(800);
          waMsg('them', vars.renda
            ? 'Registrado. Encaminharei à Encarregada para avaliação — comprovante de renda na matrícula geral costuma sobrar em relação à finalidade. Se for só para a fila da creche, o certo é pedir apenas de quem disputa vaga.'
            : 'Muito bem. Isso reduz o risco. Vou tirar “comprovante de renda” do registro da matrícula e deixar só na fila da creche, com a data de hoje.',
            'Zelo · Governança');
          goto('inventario');
          rowAdd('#tblRopa', '<td><b>Educação · matrícula</b><span class="sub">atualizado agora</span></td><td>Nome, CPF, endereço' + (vars.renda ? ', comprovante de renda <b>(a revisar)</b>' : ' <b>— renda removida</b>') + '</td><td>Política pública (art. 7º, III)</td><td>5 anos após a saída</td><td><span class="chip ' + (vars.renda ? 'chip-hum">A revisar' : 'chip-ok">Atualizada') + '</span></td>', 'new');
          opEvent('<b>Registro de tratamento atualizado</b> · operação “Educação · matrícula” revisada pela resposta da secretaria', {
            hab: 'Atualização do registro de tratamento',
            op: 'Atualizar_Registro',
            dur: '0,38s',
            envio: '{\n  "operacao": "educacao_matricula",\n  "pergunta": "coleta_comprovante_renda",\n  "resposta": ' + (vars.renda ? '"sim"' : '"nao"') + '\n}',
            resposta: '{\n  "atualizado": true,\n  "campo": "categorias_de_dados",\n  "versao_anterior": "v4",\n  "versao_nova": "v5",\n  "respondente": "Silvana Rocha · Sec. de Educação"\n}',
            base: 'Art. 37 — o controlador deve manter registro das operações de tratamento. A evidência inclui quem respondeu e quando.'
          });
          evidencia('Registro atualizado · Educação · matrícula · v4 → v5');
        },

        /* 4 — a pergunta que descobre o que ninguém mapeou */
        async () => {
          goto('canal');
          await waTyping(1000);
          waMsg('them', 'Faço agora uma pergunta aberta. É nela que costuma aparecer o que ainda não foi mapeado:<br><br><b>Tem alguma coisa que a Secretaria faz com dado de aluno que não esteja em sistema oficial?</b> Planilha própria, grupo de WhatsApp, drive pessoal, papel na gaveta — vale tudo. Não se trata de auditoria: é para que eu registre corretamente.', 'Zelo · Governança');
          await sleep(350);
          waChoices(['Tem os grupos de WhatsApp das turmas', 'Não, tudo no sistema'], choice => {
            vars.grupo = choice.startsWith('Tem');
            advance(true);
          });
        },

        /* 5 — o achado */
        async () => {
          waMsg('me', vars.grupo
            ? 'Tem os grupos de WhatsApp das turmas das creches. As professoras mandam foto e vídeo das atividades para os pais, e a lista de contatos fica lá.'
            : 'Não, acho que está tudo no sistema.');
          opMsg('client', vars.grupo
            ? 'Tem os grupos de WhatsApp das turmas. Professoras mandam foto e vídeo das atividades.'
            : 'Não, acho que está tudo no sistema.', 'Silvana Rocha');
          if (!vars.grupo) {
            await waTyping(800);
            waMsg('them', 'Compreendido. Vou confirmar a informação também junto à Coordenação das creches — as respostas cruzadas costumam revelar o que uma secretaria sozinha não lembra.', 'Zelo · Governança');
            opMsg('agent', 'Resposta cruzada agendada com a Coordenação. Operação não mapeada segue como hipótese em aberto.', 'IA · Governança');
            vars.grupo = true;
            await sleep(300);
          }
          opEvent('⚠️ <b>Operação não mapeada detectada</b> · imagem de aluno em grupo de WhatsApp não oficial · titular menor de idade');
          goto('inventario');
          rowAdd('#tblRopa', '<td><b>Creches · foto e vídeo em grupo</b><span class="sub"><b>não mapeada até hoje</b></span></td><td>Imagem e voz de <b>menor</b>, telefone dos responsáveis</td><td><b style="color:var(--bad)">Sem base legal registrada</b></td><td>Indefinida</td><td><span class="chip chip-bad">Risco alto</span></td>', 'risk');
          set('#ropaTot', '65');
          sess({ pv: '⚠️ Operação não mapeada · dado de menor' });
          evidencia('Operação de tratamento não mapeada identificada · risco alto · Educação');
        },

        /* 6 — classificação e escalada */
        async () => {
          goto('canal');
          await waTyping(1100);
          waMsg('them', 'Agradeço a informação, Silvana. Trata-se de algo relevante que ainda não constava do registro.<br><br>Imagem de criança é dado de titular menor: a LGPD exige <b>consentimento específico e em destaque de pelo menos um dos pais</b> (art. 14, §1º), e o tratamento tem que ser no melhor interesse da criança. Vou levar para a Encarregada com prioridade. Não se trata de erro da sua equipe: cabe ao município estabelecer a base legal adequada para essa prática.', 'Zelo · Governança');
          opMsg('agent', 'Classificação: art. 14 (menores) + art. 7º, III (política pública). Sem base legal registrada. Escalado à Encarregada com prioridade alta.', 'IA · Governança');
          await sleep(300);
          opMsg('human', 'Recebi. Três coisas: consentimento específico dos responsáveis, migrar as turmas para o canal oficial da prefeitura (onde a evidência fica) e política de retenção das imagens. Vou abrir o risco e devolver a decisão ao Secretário.', 'Marina Aguiar · Encarregada');
          evidencia('Achado escalado ao Encarregado · plano de regularização definido');
        },

        /* 7 — o achado vira risco e ação, não relatório */
        async () => {
          goto('riscos');
          opSys('Risco <b>RSC-018</b> aberto · nível alto · dono: Sec. de Educação · prazo 3 dias');
          opSys('Abertura de <b>1.180 conversas individuais</b> com os responsáveis · base para o contato: matrícula em vigor · a permissão de imagem é pedida dentro de cada conversa, com o texto destacado e sem condicionar a vaga');
          opSys('Tarefa criada: migrar 42 grupos de turma para o canal oficial até 30/09');
          rowAdd('#tblFinal', '<td><b>Foto de aluno em turma</b><span class="sub">regularização em curso</span></td><td>Consentimento específico (art. 14, §1º)</td><td>1.180</td><td><span class="chip chip-hum">Em coleta · 1 a 1</span></td>', 'new');
          evidencia('Coleta de consentimento de imagem iniciada · 1.180 conversas com responsáveis');
        },

        /* 8 — o inventário fecha o ciclo */
        async () => {
          goto('inventario');
          set('#ropaCob', '84%');
          set('#ropaVenc', '8');
          set('#ropaEnt', '3');
          modal('Registro de tratamento · o que mudou hoje', `
            <div class="mrow"><i>Respondente</i><b>Silvana Rocha · Sec. de Educação</b></div>
            <div class="mrow"><i>Canal</i>WhatsApp · entrevista conversacional</div>
            <div class="mrow"><i>Duração</i>6 min · 7 de 7 perguntas</div>
            <span class="mlbl">Alterações</span>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>Matrícula · categorias de dados revisadas</b><i>v4 → v5 · princípio da necessidade (art. 6º, III)</i></div></div>
            <div class="tline"><span class="pt warn"></span><div class="tx"><b>Nova operação mapeada: imagem de aluno em grupo de turma</b><i>sem base legal · titular menor · virou risco RSC-018</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>Cobertura do inventário: 68% → 84%</b><i>3 operações revisadas, 1 nova mapeada</i></div></div>
            <span class="mlbl">Por que isso importa</span>
            <p style="font-size:11.5px; color:var(--ink-soft)">
              A operação de maior risco da Secretaria de Educação não estava em nenhum sistema — estava num grupo
              de WhatsApp. Formulário por e-mail nunca acharia: 23% de resposta contra 91% da entrevista.
            </p>`);
          evidencia('Ciclo de revisão da Sec. de Educação concluído · cobertura 68% → 84%');
          finish();
        }
      ];
    }
  },

  /* ================================================================
     5 · Treinamento por turma — relâmpago por gatilho
     ================================================================ */
  {
    id: 'treinamento',
    label: 'Turmas e relâmpago',
    scenarioLabel: 'Santa Rita · o incidente de ontem vira aula de 2 minutos no grupo da turma',
    phoneLabel: 'Turma',
    cliente: 'prefeitura',
    modInicial: 'home',
    protocoloId: 'TR-0088',
    persona: { nm: 'Cleide Barroso', ini: 'CB', tel: '+55 32 9• ••••-••23' },
    wa: { title: 'Privacidade · Assistência Social', ini: 'AS', sub: '212 servidores · Santa Rita' },
    intro: '<strong>Curso anual de LGPD não prova nada e ninguém lembra em novembro.</strong> Os servidores são divididos em <strong>turmas por exposição a dado pessoal</strong> ainda na implantação, cada turma tem seu grupo e um agente 24h — e o conteúdo novo só aparece quando um <strong>gatilho</strong> pede: um incidente ou um achado do processo. Clique em <strong>Iniciar simulação</strong>.',

    steps({ waMsg, waTyping, waSys, waChoices, opMsg, opSys, opEvent, opHead, sess, goto, ticket, lead, modal, set, bar, rowAdd, evidencia, sleep, finish, advance, vars }) {

      lead.tit = 'Relâmpago · rotina de exoneração';
      lead.cliNm = 'Prefeitura de Santa Rita';
      lead.tag = 'TREINAMENTO';
      lead.prazo = 'conclusão na mesma semana';

      return [

        /* 1 — o gatilho: o incidente de ontem */
        async () => {
          goto('treinamento');
          opSys('Incidente <b>INC-0007</b> encerrado ontem às 18h · plano de ação aprovado pelo Secretário');
          opEvent('<b>Gatilho de relâmpago identificado</b> · o plano de ação muda a rotina de exoneração e a exportação de base · turmas expostas: <b>Assistência Social</b> (212) e <b>TI</b> (24)', {
            hab: 'Disparo de atualização por gatilho',
            op: 'Selecionar_Turmas_Expostas',
            dur: '0,38s',
            envio: '{\n  "gatilho": "incidente",\n  "ref": "INC-0007",\n  "risco": ["credencial_ativa_apos_exoneracao","exportacao_de_base"]\n}',
            resposta: '{\n  "turmas": [\n    { "nome": "Assistencia Social", "servidores": 212, "motivo": "opera o CadUnico" },\n    { "nome": "TI e sistemas", "servidores": 24, "motivo": "revoga acesso e exporta base" }\n  ],\n  "turmas_nao_expostas": ["Educacao","Saude","Atendimento"],\n  "prazo_sugerido": "mesma semana"\n}',
            base: 'Art. 46 e 50 — medidas de segurança e boas práticas. O aprendizado sai do incidente e vai para quem opera o processo que falhou, não para a prefeitura inteira.'
          });
          opMsg('human', 'Educação e Saúde ficam de fora: não operam exoneração nem exportam a base do CadÚnico. Mandar para os 3.140 servidores é o jeito mais rápido de ninguém ler.', 'Marina Aguiar · Encarregada');
          evidencia('Gatilho de relâmpago identificado a partir do INC-0007 · 2 turmas');
        },

        /* 2 — o relâmpago chega no grupo da turma */
        async () => {
          goto('canal');
          waSys('Atualização relâmpago no grupo <b>Privacidade · Assistência Social</b>');
          await sleep(400);
          waMsg('them', '<b>2 minutos, sobre o que aconteceu aqui na semana passada.</b><br><br>Uma credencial de servidor já exonerado continuou ativa e baixou a base do CadÚnico às 2h da manhã. <b>Ninguém do time errou</b> — o processo de exoneração é que não revogava o acesso no mesmo dia.<div class="wa-card"><b>O que muda para vocês</b>Exoneração passa a revogar acesso no mesmo dia, e exportar base vai pedir segundo fator.</div>', 'Zelo · Privacidade', 'w4');
          opHead({ nm: 'Turma · Assistência Social', ini: 'AS', tag: 'TREINAMENTO', st: 'Grupo do WhatsApp · 212 servidores · Santa Rita', chip: 'chip-ia', chipT: 'Relâmpago' });
          opMsg('agent', 'Relâmpago entregue nos 2 grupos · 236 servidores · sem culpar ninguém, que é o que faz a turma ler em vez de fechar.', 'IA · Privacidade');
          sess({ tag: 'TREINAMENTO', pv: 'Relâmpago entregue · turma Assistência Social', eq: 'Privacidade' });
        },

        /* 3 — a pergunta que vira prova */
        async () => {
          await waTyping(900);
          waMsg('them', '<b>Uma única pergunta e encerramos.</b> Você acha uma planilha com dados de famílias do CadÚnico num drive aberto para a prefeitura toda. O que faz primeiro?', 'Zelo · Privacidade', 'w4');
          await sleep(350);
          waChoices(['Tiro o compartilhamento e aviso', 'Aviso a chefia e espero', 'Apago a planilha'], choice => {
            vars.resp = choice;
            advance(true);
          });
        },

        /* 4 — a correção com a explicação, e a prova registrada */
        async () => {
          const r = vars.resp || 'Tiro o compartilhamento e aviso';
          waMsg('me', r);
          opMsg('client', 'Cleide Barroso respondeu: “' + r + '”', 'Turma Assistência Social');
          await waTyping(1000);
          if (r.indexOf('Apago') === 0) {
            waMsg('them', 'Quase, Cleide. Esse é um equívoco frequente. <b>Apagar destrói a evidência</b> de quem teve acesso, e sem ela não é possível avaliar o risco nem responder à família depois.<br><br>O certo é <b>fechar o compartilhamento e avisar</b>. Preservar vem antes de limpar.', 'Tira-dúvidas de Privacidade', 'w2');
          } else if (r.indexOf('Aviso a chefia') === 0) {
            waMsg('them', 'Parcialmente correto. Comunicar é fundamental, porém <b>o relógio começa quando alguém percebe</b> — enquanto o compartilhamento estiver aberto, a exposição continua. Feche primeiro, avise em seguida.', 'Tira-dúvidas de Privacidade', 'w2');
          } else {
            waMsg('them', '✅ Isso. Fechar primeiro, avisar em seguida — e <b>não apagar</b>, porque a planilha é a evidência de quem teve acesso.', 'Tira-dúvidas de Privacidade', 'w2');
          }
          opEvent('<b>Prova de treinamento registrada</b> · Cleide Barroso · conteúdo “Relâmpago INC-0007 · rotina de exoneração” · 31/08/2026 · resposta arquivada com o texto exibido');
          evidencia('Prova de treinamento gravada · relâmpago INC-0007 · Cleide Barroso');
        },

        /* 5 — o agente tira a dúvida no grupo, na hora do trabalho */
        async () => {
          await sleep(300);
          waMsg('them', 'Aproveito para perguntar: um vereador solicitou a lista de famílias do CadÚnico do bairro dele. Pode mandar?', 'Cleide · Assistência', 'w1');
          await waTyping(1100);
          waMsg('them', 'Não é possível, Cleide. A lista nominal de família do CadÚnico é <b>dado pessoal de pessoa em situação de vulnerabilidade</b> — nem vereador acessa isso sem previsão legal.<div class="wa-card"><b>O que pode</b>Número de famílias atendidas por bairro, sem nome. Isso é informação pública e eu te ajudo a montar.</div>Caso ele insista, encaminhe a solicitação para mim que trato o assunto com o gabinete.', 'Tira-dúvidas de Privacidade', 'w2');
          opEvent('Dúvida respondida <b>dentro do grupo da turma</b>, no momento do trabalho · base: aviso de privacidade e inventário do próprio município');
          opMsg('agent', 'É aqui que o treinamento pega: a dúvida de LGPD aparece na hora de fazer, não na hora do curso.', 'IA · Privacidade');
          evidencia('Dúvida da turma respondida pelo agente · pedido de lista nominal barrado');
        },

        /* 6 — o limite do agente: o que é jurídico sobe */
        async () => {
          await sleep(300);
          waMsg('them', 'E se uma família pedir para apagar tudo que a prefeitura tem sobre ela?', 'Wilson · Assistência', 'w3');
          await waTyping(1000);
          waMsg('them', 'Essa decisão <b>não é minha</b>, Wilson: trata-se de questão jurídica e será encaminhada à Encarregada. Posso adiantar o entendimento: o CadÚnico é política pública, então não é um “apaga tudo”. Mas quem responde formalmente é a Marina, e ela responde no prazo.', 'Tira-dúvidas de Privacidade', 'w2');
          opEvent('⬆️ <b>Escalado ao Encarregado</b> · o agente não inventa resposta jurídica · pergunta virou item de acompanhamento');
          opMsg('human', 'Prefiro um agente que diz “essa não é comigo” a um que arrisca. O erro dele viraria orientação errada para 212 pessoas de uma vez.', 'Marina Aguiar · Encarregada');
          evidencia('Dúvida jurídica escalada do agente ao Encarregado');
        },

        /* 7 — o painel: cobertura da turma e prova por pessoa */
        async () => {
          goto('treinamento');
          set('#trRhPct', '100%');
          set('#trRhRel', 'hoje · relâmpago INC-0007');
          set('#trRel', '4');
          set('#trDia', '69%');
          rowAdd('#tblRelampago', '<td><b>Incidente INC-0007</b><span class="sub">interno · encerrado ontem</span></td><td>Assistência, TI</td><td>236 de 236</td>', 'new');
          opMsg('agent', 'Turma Assistência Social: 212 de 212 responderam em 4 horas. TI: 24 de 24. O relâmpago fecha em horas porque cabe numa mensagem — o curso de 4 horas levava 6 semanas e terminava em 61%.', 'IA · Privacidade');
          evidencia('Relâmpago concluído · 236 de 236 servidores com prova registrada');
        },

        /* 8 — o que o controlador leva */
        async () => {
          goto('conformidade');
          modal('Treinamento por turma · o que muda', `
            <p style="font-size:12px; color:var(--ink-soft); margin-bottom:10px">
              O modelo inteiro cabe em quatro decisões, e nenhuma delas é “fazer um curso”.
            </p>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>Turmas por exposição a dado, não por organograma</b><i>quem opera o CadÚnico aprende sobre o CadÚnico · Educação e Saúde ficaram de fora, e isso é uma qualidade</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>Um grupo por turma, aberto na implantação</b><i>é onde chega o conteúdo, nasce a dúvida e fica a prova</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>Agente dentro do grupo, 24h</b><i>responde na hora do trabalho e escala o que é jurídico em vez de arriscar</i></div></div>
            <div class="tline"><span class="pt warn"></span><div class="tx"><b>Conteúdo novo só por gatilho</b><i>incidente ou achado do processo · nunca por calendário</i></div></div>
            <span class="mlbl">O número que interessa</span>
            <p style="font-size:11.5px; color:var(--ink-soft)">
              236 de 236 servidores em 4 horas, com resposta individual arquivada. O curso anual de 4 horas
              levava 6 semanas e parava em 61% — e não produzia prova de que alguém entendeu alguma coisa.
            </p>`);
          bar('#ixPrefeitura', 71, '71');
          const v = document.getElementById('ixPrefeituraV'); if (v) v.textContent = '71';
          const el = document.getElementById('ixPrefeitura'); if (el) el.className = 'warn';
          evidencia('Índice de conformidade recalculado · 63 → 71');
          finish();
        }
      ];
    }
  }
  ,

  /* ================================================================
     6 · Judicialização — a defesa se constrói antes da ação
     ================================================================ */
  {
    id: 'judicializacao',
    label: 'Judicialização',
    scenarioLabel: 'Santa Rita · o município é citado, e a defesa sai da trilha de evidências',
    phoneLabel: 'Defesa',
    cliente: 'prefeitura',
    modInicial: 'home',
    protocoloId: 'JUD-0031',
    persona: { nm: 'Sebastião Rilke', ini: 'SR', tel: '+55 32 9• ••••-••60' },
    wa: { title: 'Defesa · Ação 0008123', ini: 'DF', sub: 'Marina, Dra. Izabelly (externa), Procuradoria' },
    waAbertura: 'Hoje · 09:12',
    intro: '<strong>A defesa não se escreve depois da citação — ela se acumula antes.</strong> Um dos 12.400 titulares atingidos pelo incidente do CadÚnico entrou com ação de indenização, e o município foi citado. Tudo que a plataforma gravou nos meses anteriores vira, agora, prova. Clique em <strong>Iniciar simulação</strong>.',

    steps({ waMsg, waTyping, waSys, waChoices, opMsg, opSys, opEvent, opHead, sess, goto, ticket, lead, modal, set, bar, rowAdd, evidencia, sleep, finish, advance, vars, persona }) {

      lead.tit = 'Ação de indenização · dano moral por vazamento';
      lead.cliNm = 'Prefeitura de Santa Rita';
      lead.tag = 'JUDICIALIZACAO';
      lead.prazo = '30 dias · prazo em dobro da Fazenda Pública (art. 183 do CPC)';

      return [

        /* 1 — a citação chega e vira item com prazo processual */
        async () => {
          goto('riscos');
          opSys('📄 Citação recebida pela Procuradoria · <b>Ação 0008123-45.2026.8.13.0621</b> · vara da Fazenda Pública');
          opEvent('<b>Item JUD-0031 aberto no painel</b> · ação de indenização por dano moral · autor: titular atingido pelo incidente INC-0007 · <b>data de validade = prazo de defesa</b>', {
            hab: 'Abertura de item por citação judicial',
            op: 'Registrar_Acao_Judicial',
            dur: '0,52s',
            envio: '{\n  "processo": "0008123-45.2026.8.13.0621",\n  "objeto": "indenizacao_dano_moral",\n  "fato_gerador": "INC-0007"\n}',
            resposta: '{\n  "item": "JUD-0031",\n  "prazo_dias": 30,\n  "fundamento_prazo": "art. 183 do CPC · prazo em dobro da Fazenda Publica",\n  "vinculado_a": ["INC-0007", "12400_titulares"],\n  "responsavel": "Procuradoria + advogada externa"\n}',
            base: 'O prazo processual entra como data de validade do item, do mesmo jeito que o prazo da ANPD entrou no incidente. Quem controla prazo em planilha perde prazo.'
          });
          opMsg('human', 'Era questão de tempo. Vazamento com 12.400 famílias sempre gera ação individual, e às vezes ação civil pública do Ministério Público em seguida.', 'Marina Aguiar · Encarregada');
          evidencia('Ação judicial 0008123 registrada · item JUD-0031 · prazo de 30 dias');
        },

        /* 2 — grupo de defesa, com a advogada externa */
        async () => {
          goto('canal');
          waSys('Marina Aguiar criou o grupo <b>Defesa · Ação 0008123</b>');
          waSys('Dra. Izabelly Nunes (advogada externa) e Dr. Aurélio Sena (Procuradoria) entraram no grupo');
          waMsg('them', 'Bom dia. Fomos citados na ação 0008123, movida por um dos titulares atingidos pelo incidente do CadÚnico. Prazo de defesa: <b>30 dias</b>, contados em dobro por se tratar da Fazenda Pública.', 'Marina · Encarregada', 'w4');
          await sleep(400);
          waMsg('them', 'Bom dia, Marina. Antes de qualquer tese, preciso saber o que existe de registro. Em ação de vazamento, o que decide é <b>o que o município conseguir provar que fez</b>, e em quanto tempo.', 'Dra. Izabelly · advogada externa', 'w1');
          opHead({ nm: 'Grupo · Defesa Ação 0008123', ini: 'DF', tag: 'JUDICIALIZACAO', st: 'Grupo do WhatsApp · 3 participantes · advogada externa incluída', chip: 'chip-hum', chipT: 'Humano' });
          opEvent('<b>Grupo do WhatsApp criado</b> · a advogada externa <b>não é usuária da conta</b> e não teria como participar de um chat interno · etiqueta <span class="tag">JUD-0031</span>');
          sess({ tag: 'JUDICIALIZACAO', pv: 'Defesa da ação 0008123 · dossiê em montagem', eq: 'Jurídico' });
          evidencia('Grupo de defesa aberto · 3 participantes · vinculado ao JUD-0031');
        },

        /* 3 — a plataforma monta o dossiê sozinha */
        async () => {
          goto('conformidade');
          opEvent('<b>Montar dossiê probatório</b> · a plataforma reúne tudo o que existe sobre o autor e sobre o incidente, com carimbo de tempo', {
            hab: 'Montagem de dossiê probatório',
            op: 'Montar_Dossie',
            dur: '3,14s',
            envio: '{\n  "processo": "0008123",\n  "titular_id": "SRV-118940",\n  "incidente": "INC-0007",\n  "escopo": ["evidencias","comunicacoes","trilha_de_acesso","plano_de_acao"]\n}',
            resposta: '{\n  "evidencias": 214,\n  "comunicacoes_ao_titular": 2,\n  "duvidas_respondidas": 1,\n  "acessos_ao_dado_do_autor": 6,\n  "documentos": ["linha_do_tempo_INC-0007","protocolo_ANPD","texto_exato_comunicado","log_de_contencao"],\n  "hash_do_pacote": "b30f9a71c4"\n}',
            base: 'Art. 6º, X — prestação de contas. O que se produz todo dia para a ANPD serve, sem retrabalho, para o juiz.'
          });
          opMsg('agent', 'Dossiê montado em 3 segundos: 214 evidências ligadas ao autor e ao incidente, com hash do pacote. Nenhuma delas foi produzida agora — todas já existiam.', 'IA · Encarregado');
          evidencia('Dossiê probatório do processo 0008123 montado · 214 evidências · hash b30f9a71c4');
        },

        /* 4 — o que a trilha entrega a favor */
        async () => {
          goto('canal');
          await waTyping(1200);
          waMsg('them', 'Doutora, o dossiê está pronto. O que está documentado, com hora:<div class="wa-card"><b>Diligência do município</b>Conhecimento às 02:26, quando o TI registrou o caso · contenção concluída às 02:40, em 14 minutos · ANPD e Controladoria comunicadas às 08:12, dentro dos 3 dias úteis.</div><div class="wa-card"><b>Sobre o próprio autor</b>Comunicado às 08:40 do mesmo dia, com o texto exato arquivado. Ele fez uma pergunta às 09:07 e foi respondido em 4 minutos.</div>', 'Marina · Encarregada', 'w4');
          await sleep(400);
          waMsg('them', 'Isso muda a conversa. A petição alega que ele “soube pela imprensa” e que o município se omitiu. Nós temos <b>o registro de que ele foi avisado no mesmo dia</b>, o texto que recebeu e a resposta à dúvida dele. Não é palavra contra palavra.', 'Dra. Izabelly · advogada externa', 'w1');
          opEvent('Alegação de omissão confrontada por evidência datada · comunicação ao autor às 08:40 e resposta à dúvida em 4 minutos');
          evidencia('Prova de comunicação ao autor anexada ao dossiê · texto exato e horário');
        },

        /* 5 — o que a trilha mostra contra, e não dá para esconder */
        async () => {
          await sleep(300);
          waMsg('them', 'Preciso registrar também o que <b>não</b> nos ajuda, doutora. O aviso de privacidade das secretarias está pendente de publicação desde julho — é o risco RSC-004, e está documentado como vencido.', 'Marina · Encarregada', 'w4');
          await sleep(400);
          waMsg('them', 'Melhor eu saber por você agora do que pelo juiz depois. Isso não derruba a defesa, mas muda a estratégia: assumimos a pendência, mostramos que ela estava mapeada, com dono e prazo, e que a decisão dependia do gabinete. Falha documentada e em tratamento pesa muito menos que falha descoberta na audiência.', 'Dra. Izabelly · advogada externa', 'w1');
          opMsg('human', 'A trilha não é vitrine. Ela mostra o que fizemos e também o que ficou parado — e é exatamente por isso que ela tem valor probatório.', 'Marina Aguiar · Encarregada');
          opEvent('⚠️ Risco <b>RSC-004</b> anexado ao dossiê como pendência documentada · com dono, prazo e responsável pela decisão');
          evidencia('Pendência RSC-004 declarada no dossiê da defesa');
        },

        /* 6 — a linha entre o agente e o humano */
        async () => {
          opEvent('⬆️ <b>Escalonado</b> · o agente monta o dossiê, indexa e certifica; <b>tese jurídica e peça processual são da advogada</b> — o agente não redige defesa');
          await waTyping(1000);
          waMsg('them', 'Encerro minha parte aqui: prova organizada, indexada por data e com hash do pacote. <b>A tese e a peça são da senhora</b> — não redijo defesa nem opino sobre mérito.', 'Marina · Encarregada', 'w4');
          await sleep(350);
          waMsg('them', 'É assim que tem que ser. Prova organizada eu uso; tese pronta por sistema eu teria que refazer.', 'Dra. Izabelly · advogada externa', 'w1');
          opMsg('human', 'Vale para tudo na plataforma: o agente registra, apura, responde o que é padrão e entrega prova. Quando entra juízo de valor jurídico, ele para e chama gente.', 'Marina Aguiar · Encarregada');
          evidencia('Limite do agente registrado · dossiê entregue, tese reservada à advogada');
        },

        /* 7 — entrega dentro do prazo */
        async () => {
          goto('conformidade');
          opSys('Dossiê entregue à Procuradoria e à advogada externa · <b>índice com 214 evidências</b> · hash b30f9a71c4 · 4 dias após a citação');
          opEvent('<b>Item JUD-0031 movido para “Defesa protocolada”</b> — Alterado por API · 26 dias antes do fim do prazo');
          rowAdd('#tblEvid', '<td class="mono">agora</td><td>Dossiê probatório do processo 0008123 entregue · 214 evidências · hash b30f9a71c4</td><td>Encarregada</td>', 'new');
          opMsg('agent', 'Da citação à entrega do dossiê: 4 dias. O prazo era de 30. O tempo não foi gasto procurando documento — foi gasto lendo o que já estava organizado.', 'IA · Encarregado');
          evidencia('Defesa protocolada com 26 dias de folga · processo 0008123');
        },

        /* 8 — o que o gestor leva disso */
        async () => {
          modal('JUD-0031 · a defesa se constrói antes', `
            <p style="font-size:12px; color:var(--ink-soft); margin-bottom:10px">
              Nenhuma das 214 evidências foi produzida depois da citação. Todas já existiam porque cada
              passo do programa gerou registro no dia em que aconteceu.
            </p>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>Diligência provada com hora</b><i>conhecimento 02:26 · contenção 02:40 · ANPD 08:12, dentro do prazo</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>A alegação de omissão caiu por documento</b><i>o autor foi comunicado às 08:40 e teve a dúvida respondida em 4 minutos</i></div></div>
            <div class="tline"><span class="pt warn"></span><div class="tx"><b>A pendência também apareceu — e isso é qualidade</b><i>aviso de privacidade vencido, mapeado como RSC-004, com dono e prazo</i></div></div>
            <div class="tline"><span class="pt ok"></span><div class="tx"><b>O agente parou onde devia parar</b><i>montou e certificou a prova; tese e peça ficaram com a advogada externa</i></div></div>
            <span class="mlbl">O número que interessa</span>
            <p style="font-size:11.5px; color:var(--ink-soft)">
              Dossiê pronto em <b>4 dias</b> de um prazo de 30. Sem a trilha, esses 30 dias seriam gastos
              perguntando a cada secretaria o que aconteceu em uma madrugada de agosto — e boa parte da
              resposta seria “não sei dizer”.
            </p>`);
          bar('#ixPrefeitura', 66, '66');
          const v = document.getElementById('ixPrefeituraV'); if (v) v.textContent = '66';
          evidencia('Índice de conformidade recalculado após a defesa · 63 → 66');
          finish();
        }
      ];
    }
  }
];

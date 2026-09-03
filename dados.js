/* Central de atendimento Privacidade — workspace de demonstração.
   Uma única organização: Prefeitura de Santa Rita do Vale (128.000 habitantes),
   que contratou a Zelo Privacidade como Encarregado (DPO como serviço).
   Nada aqui é dado real: nomes, protocolos, hashes e números são de demonstração.

   Dois ambientes, separados pela barra da Central de atendimento:
   · Apps          → plataforma de privacidade (gestão da LGPD: registro, prazo, risco, prova)
   · Atendimentos  → Central de atendimento (execução: atendimento, campanha, grupo — onde a conversa acontece) */

window.DADOS = {

  marca: { nome: 'Zelo Privacidade', sigla: 'ZP', sub: 'Encarregado como serviço' },
  dpo: { nm: 'Marina Aguiar · Encarregada', ini: 'MA' },
  canal: '+55 32 3618-1746',
  protocolo: '#2026083100147',
  evidencias: 9420,

  clientes: [
    { id: 'prefeitura', curto: 'Pref. Santa Rita', nm: 'Prefeitura de Santa Rita do Vale',
      setor: 'Setor público · 128.000 habitantes', titulares: '128.000' }
  ],

  portal: {
    todos:      { indice: '63', indiceD: 'Prefeitura de Santa Rita', prazo: '96%', medio: '5,2 dias', pend: 6, rec: 41, ok: 39, and: 4, rec2: 2 },
    prefeitura: { indice: '63', indiceD: 'Prefeitura de Santa Rita', prazo: '96%', medio: '5,2 dias', pend: 6, rec: 41, ok: 39, and: 4, rec2: 2 }
  },

  /* Inbox do canal do Encarregado — ambiente Central de atendimento */
  sessoes: [
    { cli: 'prefeitura', nm: 'Dulce Amorim', av: 'DA', tag: 'LAI', eq: 'e-SIC', resp: 'Bot · Triagem', pv: 'Diárias do gabinete · encaminhado à Controladoria', tm: '10:05' },
    { cli: 'prefeitura', nm: 'Sebastião Rilke', av: 'SR', tag: 'ACESSO_ART18', eq: 'Privacidade', resp: 'Marina Aguiar', pv: 'IA: relatório de 4 secretarias enviado ✔', tm: '09:48' },
    { cli: 'prefeitura', nm: 'Silvana Rocha', av: 'SR', tag: 'INVENTARIO', eq: 'Governança', resp: 'Bot · Entrevista', pv: 'Entrevista da Sec. de Educação · 4 de 7', tm: '09:31' },
    { cli: 'prefeitura', nm: 'Iolanda Freire', av: 'IF', tag: 'REVOGACAO', eq: 'Privacidade', resp: 'Marina Aguiar', pv: '✔ Saiu do informativo do gabinete · 8s', tm: '08:57' },
    { cli: 'prefeitura', nm: 'Bruno Tavares', av: 'BT', tag: 'ACESSO_AUDITADO', eq: 'Auditoria', resp: 'Marina Aguiar', pv: 'Justificativa de acesso pedida · 340 cadastros', tm: '08:12' }
  ],

  /* Painel do CRM: fases da solicitação de titular */
  solicitacoes: [
    { id: 'recebida', nm: '0. Recebida', cards: [
      { id: 'DT-0412', cli: 'prefeitura', cliNm: 'Sec. de Saúde', tit: 'Acesso ao prontuário da UBS', kd: 'aberta há 40min · faltam 15 dias', chip: 'chip-ia', chipT: 'IA' } ] },
    { id: 'identidade', nm: '1. Identidade', cards: [
      { id: 'DT-0409', cli: 'prefeitura', cliNm: 'Sec. de Educação', tit: 'Confirmação de tratamento', kd: '2º fator pendente · faltam 14 dias', chip: 'chip-hum', chipT: 'Aguardando' } ] },
    { id: 'apuracao', nm: '2. Em apuração', cards: [
      { id: 'DT-0406', cli: 'prefeitura', cliNm: 'Assistência Social', tit: 'Acesso — cadastro do CadÚnico', kd: '4 secretarias consultadas · faltam 11 dias', chip: 'chip-ia', chipT: 'IA' },
      { id: 'DT-0403', cli: 'prefeitura', cliNm: 'Sec. de Fazenda', tit: 'Correção de endereço no IPTU', kd: 'aguardando a Fazenda · faltam 9 dias', chip: 'chip-ia', chipT: 'IA' } ] },
    { id: 'revisao', nm: '3. Revisão do Encarregado', cards: [
      { id: 'DT-0398', cli: 'prefeitura', cliNm: 'Administração', tit: 'Eliminação — cadastro de concurso', kd: 'minuta pronta · faltam 8 dias', chip: 'chip-hum', chipT: 'Humano' } ] },
    { id: 'respondida', nm: '4. Respondida', cards: [
      { id: 'DT-0391', cli: 'prefeitura', cliNm: 'Sec. de Educação', tit: 'Acesso — fila da creche', kd: 'respondida em 2 dias', chip: 'chip-ok', chipT: 'No prazo' },
      { id: 'DT-0387', cli: 'prefeitura', cliNm: 'Gabinete', tit: 'Revogação do informativo', kd: 'respondida em 8 segundos', chip: 'chip-ok', chipT: 'No prazo' } ] },
    { id: 'recusada', nm: '5. Recusada (justificada)', cards: [
      { id: 'DT-0374', cli: 'prefeitura', cliNm: 'Assistência Social', tit: 'Eliminação do CadÚnico', kd: 'política pública · art. 7º, III', chip: 'chip-bad', chipT: 'Justificada' } ] }
  ],

  /* Base de modelos de formulário, já cadastrada — o usuário escolhe, não escreve do zero */
  modelos: [
    { id: 'FRM-M01', nm: 'Inventário de operações por área', perg: 40, pre: 33, uso: 'Mapa de dados', area: 'Todas as secretarias' },
    { id: 'FRM-M02', nm: 'Relatório de impacto (RIPD)', perg: 68, pre: 57, uso: 'Avaliações', area: 'Dono do projeto' },
    { id: 'FRM-M03', nm: 'Due diligence de fornecedor', perg: 90, pre: 76, uso: 'Gestão de terceiros', area: 'Fornecedor' },
    { id: 'FRM-M04', nm: 'Trilha inicial de treinamento', perg: 5, pre: 0, uso: 'Treinamento', area: 'Turmas' },
    { id: 'FRM-M05', nm: 'Coleta de consentimento específico', perg: 3, pre: 0, uso: 'Consentimento', area: 'Cidadãos' },
    { id: 'FRM-M06', nm: 'Diagnóstico de maturidade', perg: 52, pre: 12, uso: 'Implantação', area: 'Gabinete' }
  ],

  /* Conteúdo dos modais de ação dos módulos */
  novos: {

    formulario: { titulo: 'Novo formulário', html: `
      <p style="font-size:12px; color:var(--ink-soft); margin-bottom:10px">
        Escolha um modelo já cadastrado. As perguntas vêm prontas e a plataforma pré-preenche
        o que já sabe do inventário, das bases legais e dos contratos.
      </p>
      <span class="mlbl">Passo 1 · modelo</span>
      <div class="tblwrap"><table class="tbl"><thead><tr>
        <th></th><th>Modelo</th><th>Perguntas</th><th>Onde é usado</th></tr></thead><tbody>
        <tr><td><span class="radio on"></span></td><td><b>Inventário de operações por área</b><span class="sub">FRM-M01</span></td><td><b>7</b> ao respondente<span class="sub">40 no modelo · 33 pré-preenchidas</span></td><td>Mapa de dados</td></tr>
        <tr><td><span class="radio"></span></td><td><b>Relatório de impacto (RIPD)</b><span class="sub">FRM-M02</span></td><td><b>11</b><span class="sub">68 no modelo · 57 do inventário</span></td><td>Avaliações</td></tr>
        <tr><td><span class="radio"></span></td><td><b>Due diligence de fornecedor</b><span class="sub">FRM-M03</span></td><td><b>14</b><span class="sub">90 no modelo · 76 do contrato</span></td><td>Terceiros</td></tr>
        <tr><td><span class="radio"></span></td><td><b>Trilha inicial de treinamento</b><span class="sub">FRM-M04</span></td><td><b>5</b></td><td>Treinamento</td></tr>
        <tr><td><span class="radio"></span></td><td><b>Coleta de consentimento específico</b><span class="sub">FRM-M05</span></td><td><b>3</b></td><td>Consentimento</td></tr>
        <tr><td><span class="radio"></span></td><td><b>Diagnóstico de maturidade</b><span class="sub">FRM-M06</span></td><td><b>40</b><span class="sub">52 no modelo</span></td><td>Implantação</td></tr>
      </tbody></table></div>
      <span class="mlbl">Passo 2 · área respondente</span>
      <div class="chips-sel">
        <span class="csel on">Todas as secretarias</span><span class="csel">Educação</span><span class="csel">Saúde</span>
        <span class="csel">Assistência Social</span><span class="csel">Fazenda</span><span class="csel">Administração</span>
        <span class="csel">TI</span><span class="csel">Procuradoria</span><span class="csel">Gabinete</span>
      </div>
      <p style="font-size:11px; color:var(--ink-faint); margin-top:8px">
        Os contatos das áreas já estão cadastrados: cada secretaria tem um responsável indicado no inventário.
      </p>
      <div class="handoff" style="margin-top:12px">
        <b>Próximo passo: criar a campanha de preenchimento.</b>
        O formulário fica registrado aqui; quem conversa com as áreas é a Central de atendimento.
        <button class="acionar" data-mod="campanhas">Criar campanha na Central de atendimento →</button>
      </div>` },

    campanha: { titulo: 'Nova campanha de preenchimento', html: `
      <p style="font-size:12px; color:var(--ink-soft); margin-bottom:10px">
        Uma campanha liga um <b>formulário</b> a uma <b>base de contatos</b> e a um <b>momento</b>.
        A execução acontece na Central de atendimento.
      </p>
      <div class="mrow"><i>Formulário</i><b>Inventário de operações · FRM-014</b></div>
      <div class="mrow"><i>Base de contatos</i>Donos de área das secretarias · 9 contatos</div>
      <div class="mrow"><i>Canal</i>Sequência no WhatsApp · uma conversa por pessoa</div>
      <div class="mrow"><i>Lembrete</i>automático em 48h para quem não responder</div>
      <div class="mrow"><i>Prazo</i>7 dias corridos</div>
      <div class="handoff" style="margin-top:12px">
        <b>Isto será executado na Central de atendimento.</b>
        Esta plataforma cria a campanha e guarda a prova; quem conversa é a Central de atendimento.
        <button class="acionar" data-mod="campanhas">Abrir na Central de atendimento →</button>
      </div>` },

    finalidade: { titulo: 'Nova finalidade de tratamento', html: `
      <p style="font-size:12px; color:var(--ink-soft); margin-bottom:10px">
        Toda finalidade precisa de uma base legal e de uma <b>fonte</b> — o documento ou o ato de onde
        ela vem. Sem fonte registrada, a finalidade não entra em operação.
      </p>
      <div class="mrow"><i>Nome da finalidade</i>Aviso de vaga em creche</div>
      <div class="mrow"><i>Secretaria</i>Educação</div>
      <span class="mlbl">Base legal</span>
      <div class="chips-sel">
        <span class="csel">Obrigação legal · art. 7º, II</span><span class="csel on">Política pública · art. 7º, III</span>
        <span class="csel">Consentimento · art. 7º, I</span><span class="csel">Tutela da saúde · art. 11</span>
        <span class="csel">Legítimo interesse · art. 7º, IX</span>
      </div>
      <span class="mlbl">Fonte da base legal</span>
      <div class="chips-sel">
        <span class="csel on">Lei ou decreto municipal</span><span class="csel">Cadastro no site da prefeitura</span>
        <span class="csel">Termo assinado no balcão</span><span class="csel">Conversa registrada no WhatsApp</span>
        <span class="csel">Contrato ou convênio</span>
      </div>
      <div class="mrow" style="margin-top:10px"><i>Retenção</i>Enquanto durar o programa</div>
      <div class="mrow"><i>Responsável</i>Sec. de Educação</div>
      <p class="rule">
        Se a base escolhida for <b>consentimento</b>, a plataforma exige um formulário de coleta
        (modelo FRM-M05) antes de liberar a finalidade — e o consentimento só pode ser colhido dentro
        de um contato que já tenha outra base legal.
      </p>` },

    consentimento: { titulo: 'Incluir ou retirar consentimento', html: `
      <p style="font-size:12px; color:var(--ink-soft); margin-bottom:10px">
        O registro pode ser incluído ou retirado por três caminhos, e todos geram a mesma prova.
      </p>
      <span class="mlbl">Caminho do registro</span>
      <div class="chips-sel">
        <span class="csel on">Pelo próprio titular, na conversa</span>
        <span class="csel">Pelo balcão, com termo digitalizado</span>
        <span class="csel">Importação do cadastro do site</span>
      </div>
      <span class="mlbl">Operação</span>
      <div class="chips-sel">
        <span class="csel on">Incluir consentimento</span>
        <span class="csel">Retirar consentimento (revogação)</span>
        <span class="csel">Registrar recusa</span>
      </div>
      <div class="mrow" style="margin-top:10px"><i>Titular</i>Iolanda Freire · SRV-40217</div>
      <div class="mrow"><i>Finalidade</i>Informativo do gabinete</div>
      <div class="mrow"><i>Fonte</i>Termo assinado no balcão da Fazenda · 14/03/2026</div>
      <div class="mrow"><i>Aviso vigente</i>v2 · desde 14/05/2026</div>
      <span class="mlbl">O que fica gravado</span>
      <p style="font-size:11.5px; color:var(--ink-soft)">
        Quem, quando, por qual caminho, com qual texto exato e em qual versão do aviso. A retirada custa o
        mesmo esforço da inclusão (art. 8º, §5º), e a recusa é registrada com o mesmo peso do aceite.
      </p>` },

    generico: { titulo: 'Novo registro', html: `
      <p style="font-size:12px; color:var(--ink-soft)">
        O registro nasce com <b>procedência</b>: quem pediu, quando, por qual motivo e quem responde por ele.
        Sem esses quatro campos a plataforma não abre o item — é o que permite responder depois
        “de onde veio isso?”.
      </p>
      <div class="mrow" style="margin-top:10px"><i>Aberto por</i>Marina Aguiar · Encarregada</div>
      <div class="mrow"><i>Solicitante</i>a informar</div>
      <div class="mrow"><i>Motivo</i>a informar</div>
      <div class="mrow"><i>Responsável</i>a informar</div>
      <div class="mrow"><i>Prazo</i>conforme o rito do módulo</div>` }
  },

  /* ============ Ações: a plataforma cria o objeto, a Central de atendimento executa ============ */
  acoes: {

    entrevistaAreas: {
      nm: 'Entrevista de inventário com as secretarias',
      canal: 'Sequência · WhatsApp · 9 secretarias',
      oque: 'O registro das operações (<b>art. 37</b>) morre quando vira formulário: 23% de resposta. A sequência abre <b>uma conversa com o dono de cada secretaria</b> e monta o registro a partir do que ele responde — 91% de resposta. A pergunta aberta do fim é o que descobre a planilha e o grupo de WhatsApp que ninguém mapeou.',
      async run(api) {
        api.setPhone({ title: 'Zelo · Governança', ini: 'ZP', sub: 'entrevista de inventário' });
        api.waSys('Sequência disparada · 9 secretarias · uma conversa cada');
        await api.sleep(500);
        api.waMsg('them', 'Olá, Silvana. Bom dia.<br><br>São <b>sete perguntas</b> sobre o que a Secretaria de Educação faz com dado de aluno. Cerca de quatro minutos, e pode responder quando lhe for conveniente.<br><br>A primeira é sobre a matrícula: vocês ainda pedem <b>comprovante de renda</b> do responsável?', 'Zelo · Governança');
        api.evidencia('Ciclo de entrevistas de inventário aberto · 9 secretarias');
      }
    },

    colherConsentimento: {
      nm: 'Colher consentimento onde a base é consentimento',
      canal: 'Na conversa que o próprio cidadão iniciou',
      oque: 'Consentimento nunca é a base para <b>iniciar</b> o contato: se é preciso permissão para falar com a pessoa, não dá para falar com ela pedindo permissão. No município a maior parte do contato tem outra base — política pública, obrigação legal, tutela da saúde. O consentimento fica só para o que é <b>opcional</b>, e é colhido dentro de um contato que já tinha base.',
      async run(api) {
        api.setPhone({ title: 'Encarregado · Prefeitura de Santa Rita', ini: 'EN', sub: 'canal de privacidade' });
        api.waSys('Conversa iniciada pelo cidadão no canal do Encarregado · pedido sobre as próprias mensagens');
        await api.sleep(500);
        api.waMsg('them', 'Registrei sua preferência. Permita-me <b>uma única pergunta</b>, e uma recusa é perfeitamente aceitável:<br><br>posso te avisar quando abrirem <b>vagas na creche do seu bairro</b>?<div class="wa-card"><b>Só isso, e nada além</b>Não te inscreve no informativo do gabinete, não muda nada do que já resolvemos, e você desfaz quando quiser.</div>', 'Prefeitura de Santa Rita');
        api.evidencia('Consentimento pedido com finalidade única, dentro de contato com base válida');
      }
    },

    extratoBases: {
      nm: 'Entregar o extrato de bases legais ao cidadão',
      canal: 'Na conversa · resposta imediata',
      oque: 'O cidadão tem direito ao acesso facilitado à informação sobre o tratamento, com a <b>finalidade específica e a base legal de cada uma</b> (art. 9º). No município isso é especialmente confuso para ele: quase tudo que a prefeitura manda <b>não depende</b> de autorização — e é justamente por isso que precisa ser explicado.',
      async run(api) {
        api.setPhone({ title: 'Encarregado · Prefeitura de Santa Rita', ini: 'EN', sub: 'canal de privacidade' });
        api.waSys('Cidadão perguntou “quem autorizou vocês a me mandarem mensagem?”');
        await api.sleep(500);
        api.waMsg('them', 'A pergunta é pertinente, e a resposta é diferente para cada caso. Atualmente a prefeitura entra em contato com você por <b>três motivos</b>:<div class="wa-consent"><div class="cr"><span>Convocação de vacinação</span><b>saúde pública</b></div><div class="cr"><span>Aviso de IPTU e dívida</span><b>obrigação legal</b></div><div class="cr"><span>Informativo do gabinete</span><b>você autorizou</b></div></div>As duas primeiras não dependem da sua autorização e eu não posso desligar — a lei manda o município te avisar. O informativo é escolha sua, e você marcou “sim” em <b>14/03/2026</b>.', 'Prefeitura de Santa Rita');
        api.evidencia('Extrato de bases legais entregue ao cidadão na conversa');
      }
    },

    avisoPolitica: {
      nm: 'Publicar o aviso de privacidade das secretarias',
      canal: 'Aviso aos cidadãos · WhatsApp · template aprovado',
      oque: 'O <b>art. 23</b> exige que o Poder Público dê publicidade às hipóteses de tratamento, e o <b>art. 9º</b> que informe de forma clara. No município isso costuma virar um PDF no rodapé do site que ninguém acha. Aqui vira aviso no canal em que o cidadão já fala com a prefeitura.',
      async run(api) {
        api.setPhone({ title: 'Prefeitura de Santa Rita', ini: 'SR', sub: 'canal do cidadão' });
        api.waSys('Aviso de privacidade publicado · versão 2 · cidadãos com base legal para o contato');
        await api.sleep(500);
        api.waMsg('them', 'A Prefeitura de Santa Rita publicou seu <b>aviso de privacidade</b>, em linguagem simples.<br><br>Ele diz, secretaria por secretaria, quais dados o município usa, para quê e por quanto tempo guarda.<div class="wa-flow"><div class="fhead">O que você pode fazer</div><div class="fitem"><i>1</i>Ler o aviso em linguagem simples</div><div class="fitem"><i>2</i>Ver o que a prefeitura tem sobre você</div><div class="fitem"><i>3</i>Desligar o que for opcional</div></div>', 'Prefeitura de Santa Rita');
        api.evidencia('Aviso de privacidade publicado e comunicado · art. 23');
      }
    },

    divulgarCanal: {
      nm: 'Divulgar o canal do Encarregado',
      canal: 'Aviso aos cidadãos · WhatsApp · template aprovado',
      oque: 'Indicar e <b>divulgar</b> o Encarregado é obrigação do <b>art. 41</b>, e o <b>art. 23, III</b> repete isso para o Poder Público. Sem canal público o cidadão não tem por onde exercer direito — e reclama direto na ANPD ou na Controladoria.',
      async run(api) {
        api.setPhone({ title: 'Prefeitura de Santa Rita', ini: 'SR', sub: 'canal do cidadão' });
        api.waSys('Aviso enviado a 128.000 cidadãos cadastrados · template aprovado');
        await api.sleep(500);
        api.waMsg('them', 'A Prefeitura de Santa Rita agora tem um <b>canal oficial de privacidade</b>. Recomendamos guardar este número. É por ele que o senhor ou a senhora pode solicitar seus dados, corrige o que estiver errado ou tira dúvida sobre o que o município faz com eles.<div class="wa-card"><b>Encarregada de dados</b>Marina Aguiar · resposta em até 15 dias, na prática em horas.</div>', 'Prefeitura de Santa Rita');
        api.evidencia('Canal do Encarregado divulgado a 128.000 cidadãos · art. 41 e 23, III');
      }
    },

    canalTitular: {
      nm: 'Receber o pedido e identificar o titular',
      canal: 'Canal do Encarregado · conversa recebida',
      oque: 'A maior parte dos pedidos entra por aqui, boa parte <b>fora do horário do expediente</b>. O protocolo abre na hora, <b>sem verificação</b>: o prazo corre da solicitação, e travar o registro atrás de documento é atrasar o próprio prazo.<br><br>A verificação vem depois, e só quando vai <b>sair</b> dado pessoal — porque entregar a quem não é o titular é, ele mesmo, um vazamento (art. 18, §5º). Pergunta em abstrato sobre o tratamento e revogação de comunicação são respondidas <b>sem exigir documento</b>: numa não há dado pessoal, na outra a lei manda facilitar (art. 8º, §5º).',
      async run(api) {
        api.setPhone({ title: 'Zelo · Encarregado da Prefeitura', ini: 'ZP', sub: 'canal oficial de privacidade' });
        api.waSys('📥 Atendimento iniciado às 20:14 · fora do horário do expediente');
        await api.sleep(450);
        api.waMsg('me', 'Boa noite. Quero saber quais dados a prefeitura tem sobre mim e sobre a minha filha.');
        await api.sleep(450);
        api.waMsg('them', 'Boa noite. Esse é um direito seu e não é preciso justificar. Abri o protocolo <b>DT-0415</b> e já começo a apuração nas secretarias.<br><br>Antes preciso confirmar que é você — e que você responde pela sua filha.', 'Zelo · Encarregado');
        api.evidencia('Pedido de titular recebido no canal · protocolo aberto');
      }
    },

    chamadoLai: {
      nm: 'Triar o que não é direito de titular',
      canal: 'Aviso ao setor responsável + confirmação ao cidadão',
      oque: 'Nem tudo que chega no canal é direito de titular. Pedido de <b>informação pública (LAI)</b>, ouvidoria e reclamação de serviço <b>saem do fluxo do Encarregado</b>: viram protocolo no setor certo, com o prazo próprio de cada rito. Ao cidadão o agente informa duas coisas — o número do protocolo e <b>qual setor responderá, por qual canal</b>. A resposta não volta por este número.',
      async run(api) {
        api.setPhone({ title: 'Prefeitura de Santa Rita', ini: 'SR', sub: 'Encarregado · canal do cidadão' });
        api.waSys('Chamado LAI-0452 aberto e encaminhado à Sec. de Educação');
        await api.sleep(500);
        api.waMsg('them', 'Sobre o gasto do programa de creche: esse pedido não trata de dados seus, e sim de informação sobre a administração municipal. Ele segue outra lei e outro rito.<br><br>Registrei o protocolo <b>LAI-0452</b> e encaminhei à <b>Secretaria de Educação</b>, que é o setor responsável pela resposta.<div class="wa-card"><b>Importante</b>O retorno virá pelo canal do e-SIC da prefeitura, e não por este número. Este canal atende exclusivamente aos direitos previstos na LGPD.</div>', 'Zelo · Encarregado');
        api.evidencia('Pedido fora do escopo LGPD encaminhado ao setor responsável');
      }
    },

    recertificacao: {
      nm: 'Recertificação de acessos',
      canal: 'Conversa com cada chefia e com cada responsável por fornecedor',
      oque: 'A plataforma não lê log nem varre sistema. O que ela faz — e é o que funciona no município — é <b>perguntar a quem responde</b>.<br><br>Periodicamente, e sempre que o RH registra uma exoneração ou um contrato termina, ela envia a <b>cada chefia de secretaria</b> e a <b>cada responsável por fornecedor</b> a lista de quem tem acesso sob a responsabilidade dele, com três perguntas por pessoa: <b>ainda está ativa? o acesso ainda é necessário? a credencial foi atualizada ou eliminada?</b><br><br>A resposta volta estruturada, vira evidência com data e gera tarefa para o TI revogar o que sobrou. É o controle que teria evitado o INC-0007: o servidor exonerado em 12/08 apareceria na lista da chefia, que responderia “não trabalha mais aqui” — e a credencial teria sido cortada antes da madrugada de 30/08.',
      async run(api) {
        api.setPhone({ title: 'Zelo · Governança de acessos', ini: 'ZP', sub: 'recertificação trimestral' });
        api.waSys('Recertificação disparada · 9 chefias de secretaria e 14 responsáveis por fornecedor');
        await api.sleep(500);
        api.waMsg('them', 'Olá, Rosana. Bom dia.<br><br>Sou o assistente de governança da Prefeitura. Chegou a <b>recertificação trimestral</b> dos acessos da Assistência Social: são <b>7 pessoas</b> com acesso ao CadÚnico sob sua responsabilidade.<div class="wa-card"><b>Três perguntas por pessoa</b>Ainda está ativa na secretaria? O acesso ainda é necessário para a função? A credencial foi atualizada ou eliminada?</div><b>1 de 7 — Adilson Barreto, assistente social.</b> Continua na equipe?', 'Zelo · Governança');
        await api.sleep(600);
        api.waMsg('me', 'O Adilson foi exonerado em agosto. Não trabalha mais aqui.');
        await api.sleep(500);
        api.waMsg('them', 'Obrigado, Rosana. Registrei e já abri a tarefa para o TI <b>revogar a credencial hoje</b>. Sua resposta fica gravada como evidência da recertificação.', 'Zelo · Governança');
        api.evidencia('Recertificação de acessos · credencial de pessoa exonerada identificada pela chefia');
      }
    },

    formarTurmas: {
      nm: 'Formar as turmas de servidores e abrir os grupos',
      canal: 'Grupo do WhatsApp · um por turma',
      oque: 'O treinamento nasce na <b>implantação</b> e não vira boletim mensal. Os servidores são divididos em <b>turmas por exposição a dado pessoal</b> — assistência, saúde, educação, RH, TI, atendimento —, cada turma ganha o seu grupo e uma trilha curta. É no grupo que a turma recebe conteúdo, tira dúvida e deixa prova.',
      async run(api) {
        api.setPhone({ title: 'Privacidade · Assistência Social', ini: 'AS', sub: '212 servidores · Santa Rita' });
        api.waSys('Turma <b>Assistência Social</b> criada · 212 servidores · grupo aberto pela plataforma');
        api.waSys('Agente “Tira-dúvidas de Privacidade” adicionado ao grupo');
        await api.sleep(500);
        api.waMsg('them', 'Bom dia, equipe da Assistência Social.<br><br>Esta turma existe porque vocês trabalham com <b>CadÚnico, laudo social e dado de criança</b> todo dia, e isso muda o que a lei exige do município.<div class="wa-card"><b>Como funciona</b>Trilha curta agora, e depois só quando algo mudar. Em caso de dúvida, pergunte neste grupo: há um assistente disponível 24 horas para responder.</div>', 'Zelo · Privacidade', 'w4');
        api.evidencia('Turma Assistência Social formada · 212 servidores · grupo e agente ativos');
      }
    },

    agenteDuvidas: {
      nm: 'Agente de dúvidas no grupo da turma',
      canal: 'Grupo da turma · agente 24h',
      oque: 'A dúvida de LGPD aparece <b>no momento do trabalho</b>, não na hora do curso. O agente fica dentro do grupo da turma para responder na hora, com o aviso de privacidade e o inventário do próprio município como base — e escala ao Encarregado o que é decisão jurídica, em vez de inventar resposta.',
      async run(api) {
        api.setPhone({ title: 'Privacidade · Assistência Social', ini: 'AS', sub: '212 servidores · Santa Rita' });
        api.waSys('Pergunta no grupo da turma');
        await api.sleep(450);
        api.waMsg('them', 'Pessoal, o vereador pediu a lista de famílias do CadÚnico do bairro dele. Pode mandar?', 'Cleide · Assistência', 'w1');
        await api.sleep(600);
        api.waMsg('them', 'Não é possível, Cleide. A lista nominal de família do CadÚnico é <b>dado pessoal de pessoa em situação de vulnerabilidade</b> — nem vereador acessa isso sem previsão legal.<div class="wa-card"><b>O que pode</b>Número de famílias atendidas por bairro, sem nome. Isso é informação pública e eu te ajudo a montar.</div>Caso ele insista, encaminhe a solicitação para mim que trato o assunto com o gabinete.', 'Tira-dúvidas de Privacidade', 'w2');
        api.evidencia('Dúvida respondida no grupo da turma · pedido de lista nominal barrado');
      }
    },

    relampago: {
      nm: 'Atualização relâmpago por gatilho',
      canal: 'Grupo das turmas expostas · WhatsApp',
      oque: 'Não é calendário: é <b>gatilho</b>. Um incidente — do município ou de outra prefeitura — ou um achado no processo vira, na mesma semana, uma atualização curta no grupo das turmas expostas àquele risco. Quatro linhas sem culpar ninguém, uma pergunta, e a resposta de cada servidor vira <b>prova de treinamento</b> com data e conteúdo.',
      async run(api) {
        api.setPhone({ title: 'Privacidade · Assistência Social', ini: 'AS', sub: '212 servidores · Santa Rita' });
        api.waSys('Atualização relâmpago · gatilho: incidente INC-0007 encerrado ontem');
        await api.sleep(500);
        api.waMsg('them', '<b>2 minutos, sobre o que aconteceu aqui na semana passada.</b><br><br>Uma credencial de servidor já exonerado continuou ativa e baixou a base do CadÚnico às 2h da manhã. <b>Ninguém do time errou</b> — o processo de exoneração é que não revogava o acesso.<div class="wa-card"><b>O que muda para vocês</b>Exoneração passa a revogar acesso no mesmo dia, e exportar base vai pedir segundo fator.</div><b>Uma pergunta:</b> você acha uma planilha com dados de famílias num drive aberto para a prefeitura toda. O que faz primeiro?', 'Zelo · Privacidade', 'w4');
        api.evidencia('Relâmpago disparado às turmas expostas · gatilho INC-0007');
      }
    },

    avaliacaoImpacto: {
      nm: 'Relatório de impacto (RIPD)',
      canal: 'Conversa com o dono do projeto · WhatsApp',
      oque: 'O relatório de impacto do <b>art. 38</b> é o formulário mais extenso do programa: 68 questões no modelo padrão, que ninguém responde e que trava o projeto por semanas.<br><br>A plataforma <b>já sabe 57 delas</b> — categorias de dados, base legal, retenção, sistemas e compartilhamentos vêm do inventário. Sobram <b>11 perguntas</b> que só quem toca o projeto pode responder, entregues uma por vez. Quem não responde recebe cobrança sozinho.',
      async run(api) {
        api.setPhone({ title: 'Zelo · Governança', ini: 'ZP', sub: 'relatório de impacto' });
        api.waSys('RIPD do novo sistema de matrícula · 57 de 68 questões pré-preenchidas');
        await api.sleep(500);
        api.waMsg('them', 'Olá, Rodrigo. Bom dia.<br><br>O relatório de impacto do sistema de matrícula está <b>84% preenchido</b>: as respostas que já constavam do inventário foram aproveitadas automaticamente.<div class="wa-card"><b>Faltam 11 perguntas</b>Só as que dependem de quem toca o projeto. Uma por vez, e você responde quando der.</div><b>1 de 11:</b> o sistema vai decidir sozinho alguma coisa sobre a criança — vaga, turma, ordem na fila — sem alguém revisar?', 'Zelo · Governança');
        api.evidencia('RIPD iniciado com 84% pré-preenchido · 11 questões ao dono do projeto');
      }
    },

    questionarioFornecedor: {
      nm: 'Due diligence de fornecedor',
      canal: 'Conversa com o fornecedor · WhatsApp',
      oque: 'O questionário de terceiros costuma ter 90 itens em planilha, viaja por e-mail e volta pela metade — quando volta. Aqui <b>76 itens já vêm do contrato</b> e da checagem automática; os <b>14 que sobram</b> vão em conversa com quem responde pelo fornecedor.<br><br>O que ele <b>não</b> responder não some: fica registrado como <b>lacuna</b> no cadastro, com data, e vira decisão do controlador — contratar assim mesmo, ou não.',
      async run(api) {
        api.setPhone({ title: 'Sistemas Aurora Gov', ini: 'AG', sub: 'fornecedor · Santa Rita' });
        api.waSys('Due diligence · 76 de 90 itens preenchidos pelo contrato e pela checagem');
        await api.sleep(500);
        api.waMsg('them', 'Boa tarde. Sou o Encarregado de dados da Prefeitura de Santa Rita.<br><br>Como a empresa irá hospedar o <b>sistema de matrícula</b>, com dado de criança, preciso de 14 respostas rápidas — o resto eu já tirei do contrato.<div class="wa-card"><b>A resposta leva cerca de seis minutos</b>As respostas podem ser enviadas aos poucos. O que ficar sem resposta fica registrado como pendência, não como “ok”.</div><b>1 de 14:</b> vocês subcontratam alguém para processar ou armazenar esses dados?', 'Zelo · Encarregado');
        api.evidencia('Due diligence do fornecedor Aurora Gov iniciada · 14 questões');
      }
    },

    acessoOperador: {
      nm: 'Controlar o acesso do operador à conta',
      canal: 'Aprovação do controlador · WhatsApp',
      oque: 'O escritório é <b>operador</b>, o município é <b>controlador</b>. Ninguém do escritório entra na conta sem aprovação: duração de 30 minutos a 15 dias, a solicitação caduca em 5 minutos sem resposta, revogação imediata, e o log de quem pediu, quem autorizou e o que foi acessado pode ser apresentado à ANPD, à Controladoria ou ao próprio cidadão.',
      async run(api) {
        api.setPhone({ title: 'Zelo Privacidade', ini: 'ZP', sub: 'solicitação de acesso' });
        api.waSys('Solicitação de acesso à conta · expira em 5 minutos sem resposta');
        await api.sleep(500);
        api.waMsg('them', 'Secretário, bom dia. Solicito acesso à conta por <b>3 horas</b> para apurar o protocolo DT-0406.<div class="wa-card"><b>O que eu vou acessar</b>Cadastro do CadÚnico e histórico de atendimento do titular do pedido. Nada além.</div>Aprovar, negar, ou aprovar com prazo menor?', 'Zelo · Encarregado');
        api.evidencia('Acesso do operador submetido à aprovação do controlador');
      }
    },

    salaGuerra: {
      nm: 'Abrir a sala de resposta ao incidente',
      canal: 'Grupo do WhatsApp · moderado, com etiqueta do incidente',
      oque: 'Grupo, e não chat interno: a advogada externa não é usuária da conta e o TI é da prefeitura, enquanto o Encarregado é do escritório — chat interno só liga usuários da mesma conta. Às 2h da manhã, o que acorda gente é o WhatsApp. O grupo nasce com canal dono, moderador e a etiqueta do incidente, e as entradas ficam no histórico. Custa uma conversa de 24h <b>por membro</b>.',
      async run(api) {
        api.setPhone({ title: 'Resposta a Incidente · INC-0007', ini: 'RI', sub: 'Marina, Bruno (TI), Dra. Marília (advogada externa)' });
        api.waSys('Marina Aguiar criou o grupo <b>Resposta a Incidente · INC-0007</b>');
        api.waSys('Bruno Tavares e Dra. Marília Castelo (advogada externa) entraram no grupo');
        await api.sleep(450);
        api.waMsg('them', '<b>INC-0007</b> · exportação da base do CadÚnico às 02:14, credencial de servidor exonerado. Estou acordando o time.', 'Marina · Encarregada', 'w4');
        await api.sleep(400);
        api.waMsg('them', 'Já estou no console. Revogando a credencial e encerrando as sessões.', 'Bruno · TI Santa Rita', 'w2');
        api.evidencia('Sala de resposta a incidente aberta · 3 participantes');
      }
    },

    comunicarTitulares: {
      nm: 'Comunicar os cidadãos afetados',
      canal: 'Aviso aos afetados + canal de dúvidas aberto',
      oque: 'A comunicação do <b>art. 48</b> não é opcional quando há risco relevante, e não é comunicado de mão única: cada aviso abre uma conversa, porque quem recebe uma notícia dessas tem pergunta. No município ainda entra a prestação de contas à Controladoria. O que a plataforma mede não é entrega — é <b>quantas dúvidas foram respondidas</b>.',
      async run(api) {
        api.setPhone({ title: 'Prefeitura de Santa Rita', ini: 'SR', sub: 'canal do cidadão' });
        api.waSys('Comunicação do art. 48 · 12.400 famílias · entrega em 22 minutos');
        await api.sleep(500);
        api.waMsg('them', 'Senhora Iolanda, aqui é a Prefeitura de Santa Rita, com um aviso sério.<br><br>Na madrugada de ontem alguém acessou sem autorização o cadastro do CadÚnico, onde estão <b>seus dados</b> e os da sua família. O acesso foi cortado em 26 minutos e comunicamos a ANPD hoje de manhã.<div class="wa-card"><b>O que você deve fazer</b>Desconfie de ligação ou mensagem citando seus dados ou prometendo benefício. A prefeitura nunca pede senha nem PIX por telefone.</div>Permanecemos à disposição para esclarecimentos, a qualquer horário.', 'Prefeitura de Santa Rita');
        api.evidencia('12.400 famílias comunicadas · canal de dúvidas aberto');
      }
    },

    novaOperacao: {
      nm: 'Devolver ao controlador o que só ele decide',
      canal: 'Decisão do controlador · WhatsApp',
      oque: 'Quando uma secretaria quer fazer algo <b>novo</b> com dado pessoal, ou contratar um fornecedor que vai tratá-lo, a avaliação vem antes de começar. O Encarregado analisa a base legal e devolve a decisão a quem responde legalmente pelo município — porque a responsabilidade do controlador não se terceiriza.',
      async run(api) {
        api.setPhone({ title: 'Zelo Privacidade', ini: 'ZP', sub: 'decisão do controlador' });
        api.waSys('Solicitação da Secretaria de Saúde · Santa Rita');
        await api.sleep(500);
        api.waMsg('them', 'Secretário, bom dia. A Secretaria de Saúde solicitou o cruzamento d a lista de faltosos da vacinação com o CadÚnico para busca ativa. Analisei: dá para fazer — é política pública de saúde, art. 7º, III e art. 11 —, mas precisa de finalidade registrada, prazo de retenção e regra de quem vê o quê.<div class="wa-card"><b>Precisa da sua decisão</b>Aprovar o cruzamento com essas condições, ou barrar até a Saúde ajustar?</div>Prazo sugerido: 7 dias.', 'Zelo · Encarregado');
        api.evidencia('Novo cruzamento de bases submetido à decisão do controlador');
      }
    },

    relatorioMensal: {
      nm: 'Relatório mensal ao controlador',
      canal: 'WhatsApp · a quem responde pelo município',
      oque: 'Todo dia 1º, quem responde legalmente pelo município recebe o que aconteceu e — o mais importante — <b>o que depende de decisão dele</b>, com o prazo de cada uma e o que trava sem ela.',
      async run(api) {
        api.setPhone({ title: 'Zelo Privacidade', ini: 'ZP', sub: 'relatório mensal' });
        api.waSys('Relatório de agosto · enviado ao Secretário de Administração');
        await api.sleep(500);
        api.waMsg('them', 'Bom dia, Secretário. Segue o fechamento de agosto da Prefeitura de Santa Rita:<div class="wa-file"><span class="ic">PDF</span><div><b>conformidade-agosto-2026.pdf</b><span class="fm">41 pedidos · 96% no prazo · 1 incidente encerrado</span></div></div><b>6 decisões esperam por você</b>, e uma está vencida há 8 dias: publicar o aviso de privacidade das secretarias.', 'Zelo · Relatório');
        api.evidencia('Relatório mensal entregue ao controlador · 6 decisões pendentes');
      }
    }
  },

  /* ============================ Módulos ============================ */
  modulos: [

    /* ---------- HOME ---------- */
    {
      id: 'home', nm: 'Módulos', html: `
      <div class="jhead2">
        <h3>Plataforma de privacidade</h3>
        <p>Aqui se <b>trata a LGPD</b> da Prefeitura de Santa Rita do Vale: registro, prazo, risco e prova.
           Quando alguma coisa precisa falar com gente, este ambiente cria o objeto e a execução vai para o
           <b>Central de atendimento</b>, na barra de cima.</p>
      </div>
      <div class="selbox">
        <div class="selhead"><span>Módulo</span><span>Situação</span></div>
        <button class="selrow" data-mod="inventario"><span class="sn"><b>Mapa de dados</b><i>inventário e registro das operações · art. 37</i></span><span class="sv">64 operações · 11 com revisão vencida</span></button>
        <button class="selrow" data-mod="solicitacoes"><span class="sn"><b>Solicitações de titulares</b><i>pedidos do cidadão · art. 18, com prazo e procedência</i></span><span class="sv">8 abertas · 2 vencendo em 72h</span></button>
        <button class="selrow" data-mod="formularios"><span class="sn"><b>Formulários e campanhas</b><i>define as perguntas, a base de contatos e a campanha</i></span><span class="sv">4 formulários · 2 campanhas ativas</span></button>
        <button class="selrow" data-mod="consentimentos"><span class="sn"><b>Consentimento</b><i>finalidade por finalidade, com prova do aceite e da recusa</i></span><span class="sv">21.480 válidos · 3.902 bloqueados</span></button>
        <button class="selrow" data-mod="avaliacoes"><span class="sn"><b>Avaliações</b><i>relatório de impacto e legítimo interesse · art. 38</i></span><span class="sv">3 em curso · 1 aguardando o dono</span></button>
        <button class="selrow" data-mod="riscos"><span class="sn"><b>Gestão de riscos</b><i>risco com dono, medida e prazo</i></span><span class="sv">9 abertos · 3 em nível alto</span></button>
        <button class="selrow" data-mod="terceiros"><span class="sn"><b>Gestão de terceiros</b><i>operadores, due diligence e contrato</i></span><span class="sv">14 fornecedores · 3 sem contrato</span></button>
        <button class="selrow" data-mod="incidentes"><span class="sn"><b>Incidentes</b><i>art. 48 · relógio de 3 dias úteis e histórico</i></span><span class="sv">1 encerrado ontem · 2 nos 12 meses</span></button>
        <button class="selrow" data-mod="treinamento"><span class="sn"><b>Treinamento</b><i>turmas de servidores, trilha e relâmpago por gatilho</i></span><span class="sv">6 turmas · 61% de trilha concluída</span></button>
        <button class="selrow" data-mod="conformidade"><span class="sn"><b>Conformidade e evidências</b><i>índice, prazos e trilha exportável</i></span><span class="sv">9.420 evidências no mês</span></button>
      </div>`
    },

    /* ---------- Formulários e campanhas ---------- */
    {
      id: 'formularios', nm: 'Formulários e campanhas', html: `
      <div class="jcrumb"><button data-mod="home">← Módulos</button><b>Formulários e campanhas</b></div>
      <div class="modacts"><button class="btn-add" data-novo="formulario">+ Novo formulário</button><button class="btn-sec" data-novo="campanha">+ Nova campanha</button></div>
      <div class="ah"><div class="ah-col ah-a"><b>O agente resolve sozinho</b><i>Monta o formulário a partir do modelo, pré-preenche com o que já se sabe, dispara a campanha e cobra quem não respondeu.</i></div><div class="ah-col ah-h"><b>Escala para humano</b><i>Aprovação de um modelo novo · perguntas que envolvam dado sensível · decisão de enviar formulário à base de cidadãos.</i></div></div>
      <p class="jsub">O motor de coleta do programa. Um formulário define <b>as perguntas</b>; uma campanha define
      <b>para quem</b> e <b>quando</b>. O disparo e as respostas acontecem na Central de atendimento — aqui fica o registro e a prova.</p>

      <div class="fases"><span class="fase on">Todas as fases</span><span class="fase">Implantação</span><span class="fase">Manutenção</span><span class="fase">Revisão</span></div>

      <div class="card2">
        <h4>Formulários <span class="hint">perguntas, e de onde vieram</span></h4>
        <div class="tblwrap"><table class="tbl"><thead><tr>
          <th>Formulário</th><th>Fase</th><th>Perguntas</th><th>Procedência</th><th>Público-alvo</th></tr></thead>
          <tbody id="tblForms">
            <tr><td><b>Inventário · secretarias</b><span class="sub">FRM-014</span></td><td><span class="chip chip-neutral">Implantação</span></td><td><b>7</b><span class="sub">de 40 do modelo · 33 pré-preenchidas</span></td><td>Aberto na implantação<span class="sub">Marina Aguiar · 04/07</span></td><td>9 secretarias</td></tr>
            <tr><td><b>RIPD · sistema de matrícula</b><span class="sub">FRM-021</span></td><td><span class="chip chip-info">Revisão</span></td><td><b>11</b><span class="sub">de 68 do modelo · 57 do inventário</span></td><td>Pedido por Rodrigo Sena (TI)<span class="sub">22/08 · projeto novo</span></td><td>1 dono de projeto</td></tr>
            <tr><td><b>Due diligence · Aurora Gov</b><span class="sub">FRM-023</span></td><td><span class="chip chip-info">Revisão</span></td><td><b>14</b><span class="sub">de 90 do modelo · 76 do contrato</span></td><td>Pedido pela Sec. de Administração<span class="sub">27/08 · contratação</span></td><td>1 fornecedor</td></tr>
            <tr><td><b>Trilha inicial · turmas</b><span class="sub">FRM-008</span></td><td><span class="chip chip-neutral">Implantação</span></td><td><b>5</b><span class="sub">trilha da turma</span></td><td>Aberto na implantação<span class="sub">Marina Aguiar · 19/07</span></td><td>6 turmas · 3.140 servidores</td></tr>
          </tbody></table></div>
      </div>

      <div class="grid g2" style="margin-top:11px">
        <div class="card2">
          <h4>Nova campanha de preenchimento <span class="hint">3 passos</span></h4>
          <div class="wiz">
            <div class="wz done"><span class="wn">1</span><div><b>Formulário</b><i>Inventário · secretarias · FRM-014 · 7 perguntas</i></div></div>
            <div class="wz done"><span class="wn">2</span><div><b>Base de contatos</b><i>Donos de área das secretarias · <b>9 contatos</b> · vindos do próprio inventário</i></div></div>
            <div class="wz now"><span class="wn">3</span><div><b>Execução</b><i>Sequência no WhatsApp · uma conversa por pessoa · lembrete automático em 48h para quem não responder</i></div></div>
          </div>
          <div class="handoff">
            <b>Isto será executado na Central de atendimento.</b>
            Esta plataforma cria a campanha e guarda a prova; quem conversa é a Central de atendimento.
            <button class="acionar" data-mod="campanhas">Abrir na Central de atendimento →</button>
          </div>
        </div>

        <div class="card2">
          <h4>Base de contatos <span class="hint">de onde sai o público-alvo</span></h4>
          <div class="tblwrap"><table class="tbl"><thead><tr><th>Base</th><th>Origem</th><th>Contatos</th></tr></thead><tbody>
            <tr><td><b>Donos de área</b></td><td>do inventário · quem responde por cada operação</td><td>9</td></tr>
            <tr><td><b>Turmas de servidores</b></td><td>da implantação · por exposição a dado</td><td>3.140</td></tr>
            <tr><td><b>Fornecedores</b></td><td>da gestão de terceiros · com contrato ativo</td><td>14</td></tr>
            <tr><td><b>Donos de projeto</b></td><td>de quem pediu uma avaliação de impacto</td><td>3</td></tr>
            <tr class="risk"><td><b>Cidadãos</b></td><td>só com base legal válida para o contato</td><td>128.000</td></tr>
          </tbody></table></div>
          <p style="font-size:11px; color:var(--ink-faint); margin-top:7px">
            A base de cidadãos só entra em campanha depois da conferência de base legal. No município a maioria
            do contato <b>não</b> depende de consentimento — é política pública ou obrigação legal —, mas cada
            finalidade precisa estar registrada antes do envio.
          </p>
        </div>
      </div>

      <div class="card2" style="margin-top:11px">
        <h4>Campanhas <span class="hint">o que já foi para a Central de atendimento</span></h4>
        <div class="tblwrap"><table class="tbl"><thead><tr>
          <th>Campanha</th><th>Formulário</th><th>Base</th><th>Respostas</th><th>Executando em</th></tr></thead>
          <tbody id="tblCampanhas">
            <tr><td><b>Revisão do inventário · 2º sem.</b><span class="sub">CMP-031 · aberta em 31/08</span></td><td>FRM-014</td><td>9 secretarias</td><td><b>4 de 9</b><span class="sub">5 com lembrete agendado</span></td><td><span class="chip chip-ia">Central de atendimento · Sequência</span></td></tr>
            <tr><td><b>Relâmpago INC-0007</b><span class="sub">CMP-034 · aberta hoje</span></td><td>FRM-030</td><td>turmas Assistência e TI · 236</td><td><b>236 de 236</b><span class="sub">concluída em 4h</span></td><td><span class="chip chip-ok">Central de atendimento · Grupos</span></td></tr>
          </tbody></table></div>
      </div>`
    },

    /* ---------- Avaliações ---------- */
    {
      id: 'avaliacoes', nm: 'Avaliações', html: `
      <div class="jcrumb"><button data-mod="home">← Módulos</button><b>Avaliações</b></div>
      <div class="modacts"><button class="btn-add" data-novo="generico">+ Nova avaliação</button><button class="btn-sec" data-novo="formulario">Escolher modelo</button></div>
      <div class="ah"><div class="ah-col ah-a"><b>O agente resolve sozinho</b><i>Pré-preenche o formulário longo com o que já está no inventário e conduz as perguntas restantes com o dono do projeto.</i></div><div class="ah-col ah-h"><b>Escala para humano</b><i>Conclusão sobre risco alto · recomendação de barrar o projeto · aprovação final do relatório.</i></div></div>
      <p class="jsub">Relatório de impacto do <b>art. 38</b> e avaliação de legítimo interesse. O formulário longo é
      pré-preenchido pelo inventário; só o que depende do dono do projeto vira pergunta.</p>
      <div class="card2">
        <h4>Avaliações <span class="hint">com procedência</span></h4>
        <div class="tblwrap"><table class="tbl"><thead><tr>
          <th>Avaliação</th><th>Tipo</th><th>Preenchimento</th><th>Quem pediu</th><th>Situação</th></tr></thead><tbody>
          <tr><td><b>Sistema de matrícula</b><span class="sub">AVL-009 · dado de menor</span></td><td>RIPD</td><td><b>84%</b><span class="sub">57 de 68 do inventário</span></td><td>Rodrigo Sena · TI<span class="sub">22/08</span></td><td><span class="chip chip-hum">11 perguntas ao dono</span></td></tr>
          <tr><td><b>CadÚnico municipal</b><span class="sub">AVL-006 · população vulnerável</span></td><td>RIPD</td><td><b>100%</b></td><td>Encarregada<span class="sub">11/07</span></td><td><span class="chip chip-hum">Aguardando controlador</span></td></tr>
          <tr><td><b>Busca ativa de vacinação</b><span class="sub">AVL-012 · cruzamento Saúde × CadÚnico</span></td><td>RIPD</td><td><b>61%</b><span class="sub">aguarda retenção e regra de acesso</span></td><td>Sec. de Saúde<span class="sub">29/08</span></td><td><span class="chip chip-ia">Em análise</span></td></tr>
        </tbody></table></div>
      </div>`
    },

    /* ---------- Gestão de riscos ---------- */
    {
      id: 'riscos', nm: 'Gestão de riscos', html: `
      <div class="jcrumb"><button data-mod="home">← Módulos</button><b>Gestão de riscos</b></div>
      <div class="modacts"><button class="btn-add" data-novo="generico">+ Novo risco</button></div>
      <div class="ah"><div class="ah-col ah-a"><b>O agente resolve sozinho</b><i>Abre o risco a partir de achados do inventário, de incidentes e da auditoria de acessos, com origem e data.</i></div><div class="ah-col ah-h"><b>Escala para humano</b><i>Definição de nível · escolha da medida de mitigação · aceitação formal do risco pelo controlador.</i></div></div>
      <p class="jsub">Risco identificado tem dono, medida e prazo. Sem isso vira lista bonita que ninguém trata.</p>
      <div class="card2">
        <h4>Riscos abertos</h4>
        <div class="tblwrap"><table class="tbl"><thead><tr>
          <th>Risco</th><th>Nível</th><th>Origem</th><th>Medida e dono</th><th>Prazo</th></tr></thead><tbody>
          <tr class="risk"><td><b>Aviso de privacidade não publicado</b><span class="sub">RSC-004 · art. 23</span></td><td><span class="chip chip-bad">Alto</span></td><td>Diagnóstico de implantação<span class="sub">12/07</span></td><td>Publicar aviso<span class="sub">Gabinete</span></td><td><b style="color:var(--bad)">vencido há 8 dias</b></td></tr>
          <tr class="risk"><td><b>Imagem de aluno em grupo não oficial</b><span class="sub">RSC-018 · 1.180 crianças</span></td><td><span class="chip chip-bad">Alto</span></td><td>Achado da entrevista de inventário<span class="sub">31/08</span></td><td>Coleta de consentimento dos responsáveis<span class="sub">Sec. de Educação</span></td><td>3 dias</td></tr>
          <tr><td><b>Credencial ativa após exoneração</b><span class="sub">RSC-021</span></td><td><span class="chip chip-bad">Alto</span></td><td>Incidente INC-0007<span class="sub">30/08</span></td><td>Revogação no mesmo dia + MFA na exportação<span class="sub">TI · Santa Rita</span></td><td>5 dias</td></tr>
          <tr><td><b>CadÚnico sem prazo de retenção definido</b><span class="sub">RSC-013</span></td><td><span class="chip chip-hum">Médio</span></td><td>Revisão do inventário<span class="sub">14/08</span></td><td>Definir retenção pós-desligamento do programa<span class="sub">Assistência Social</span></td><td>15 dias</td></tr>
        </tbody></table></div>
      </div>`
    },

    /* ---------- Gestão de terceiros ---------- */
    {
      id: 'terceiros', nm: 'Gestão de terceiros', html: `
      <div class="jcrumb"><button data-mod="home">← Módulos</button><b>Gestão de terceiros</b></div>
      <div class="modacts"><button class="btn-add" data-novo="generico">+ Novo fornecedor</button><button class="btn-sec" data-novo="formulario">Enviar due diligence</button></div>
      <div class="ah"><div class="ah-col ah-a"><b>O agente resolve sozinho</b><i>Envia a due diligence, cobra quem não responde e registra a lacuna com data.</i></div><div class="ah-col ah-h"><b>Escala para humano</b><i>Decisão de contratar apesar de lacuna · cláusula de operador · avaliação de suboperador.</i></div></div>
      <p class="jsub">Quem trata dado pelo município responde com o município. Cada operador tem due diligence,
      contrato e — quando não responde — <b>lacuna registrada com data</b>, nunca “ok” por omissão.</p>
      <div class="card2">
        <h4>Operadores e suboperadores</h4>
        <div class="tblwrap"><table class="tbl"><thead><tr>
          <th>Fornecedor</th><th>O que trata</th><th>Due diligence</th><th>Contrato</th><th>Procedência</th></tr></thead><tbody>
          <tr><td><b>Sistemas Aurora Gov</b></td><td>Matrícula escolar · dado de menor</td><td><span class="chip chip-ia">14 perguntas enviadas</span></td><td><span class="chip chip-hum">Em minuta</span></td><td>Contratação pedida pela Administração<span class="sub">27/08</span></td></tr>
          <tr><td><b>Nuvem Log BR</b></td><td>Hospedagem dos sistemas municipais</td><td><span class="chip chip-ok">Concluída</span></td><td><span class="chip chip-ok">Assinado</span></td><td>Implantação<span class="sub">09/07</span></td></tr>
          <tr class="risk"><td><b>Folha Prisma</b></td><td>Folha de servidores · CPF e conta bancária</td><td><span class="chip chip-bad">2 lacunas</span></td><td><span class="chip chip-bad">Sem cláusula de operador</span></td><td>Achado da revisão<span class="sub">18/08</span></td></tr>
          <tr><td><b>Transporte Escolar Vale</b></td><td>Rota e endereço de aluno</td><td><span class="chip chip-ok">Concluída</span></td><td><span class="chip chip-ok">Assinado</span></td><td>Implantação<span class="sub">02/08</span></td></tr>
        </tbody></table></div>
      </div>`
    },

    /* ---------- Central de atendimento · atendimento ---------- */
    {
      id: 'canal', nm: 'Atendimentos', artone: true, split: true, html: `
      <div class="artabs"><button data-mod="canal">Atendimentos</button><button data-mod="campanhas">Campanhas</button></div>
      <aside class="inbox">
        <div class="ib-tabs"><button class="on">Novos</button><button>Meus</button><button>Outros</button></div>
        <div class="ib-filter"><span class="pill on">Todas</span><span class="pill">Não lidas</span><span style="margin-left:auto">Equipe: Privacidade</span></div>
        <div class="ib-list" id="ibList"></div>
        <div class="ib-foot"><span class="ddi">+55</span><span class="tel">Telefone do cidadão</span><button class="go">Conversar</button></div>
      </aside>
      <div class="opwrap">
        <div class="op-head" id="opHead" style="display:none">
          <span class="av" id="opAv"></span>
          <div style="min-width:0"><div class="nm" id="opNm"></div><div class="st" id="opSt"></div></div>
          <div class="acts"><span class="chip chip-ia" id="opChip">IA</span><button>Transferir</button><button class="pri">Concluir ▾</button></div>
        </div>
        <div class="op-body" id="opChat">
          <div class="empty-note" id="opEmpty">
            Canal do Encarregado da Prefeitura (art. 41).<br>
            Nenhuma conversa selecionada. Inicie a simulação para ver a solicitação do cidadão
            chegar em tempo real e virar protocolo.
          </div>
        </div>
        <div class="op-foot" id="opFoot" style="display:none">
          <span class="field">Responder como Marina · Encarregada…</span><button class="snd">Enviar</button>
        </div>
      </div>`
    },

    /* ---------- Central de atendimento · campanhas ---------- */
    {
      id: 'campanhas', nm: 'Campanhas', artone: true, html: `
      <div class="artabs"><button data-mod="canal">Atendimentos</button><button data-mod="campanhas">Campanhas</button></div>
      <div class="jhead2">
        <h3>Campanhas · Central de atendimento</h3>
        <p>Este é o <b>ambiente de execução</b>. Cada campanha aqui nasceu de um objeto criado na plataforma
           de privacidade — um formulário, um relâmpago de treinamento, uma comunicação de incidente.
           É aqui que se aciona, e é aqui que a conversa acontece.</p>
      </div>
      <div class="card2">
        <h4>Campanhas <span class="hint">origem na plataforma de privacidade</span></h4>
        <div class="tblwrap"><table class="tbl"><thead><tr>
          <th>Campanha</th><th>Veio de</th><th>Público</th><th>Situação</th><th></th></tr></thead>
          <tbody id="tblCmpArtone">
            <tr><td><b>Revisão do inventário</b><span class="sub">CMP-031 · Sequência</span></td><td>Privacidade · FRM-014<span class="sub">Formulários e campanhas</span></td><td>9 secretarias</td><td><span class="chip chip-ia">4 de 9</span></td><td><button class="acionar" data-acionar="entrevistaAreas">Acionar</button></td></tr>
            <tr><td><b>Relâmpago INC-0007</b><span class="sub">CMP-034 · Grupos</span></td><td>Privacidade · Incidente INC-0007<span class="sub">plano de ação aprovado</span></td><td>236 servidores</td><td><span class="chip chip-ok">236 de 236</span></td><td><button class="acionar" data-acionar="relampago">Acionar</button></td></tr>
            <tr><td><b>Due diligence · Aurora Gov</b><span class="sub">CMP-035 · Atendimento ativo</span></td><td>Privacidade · FRM-023<span class="sub">Gestão de terceiros</span></td><td>1 fornecedor</td><td><span class="chip chip-hum">Aguardando envio</span></td><td><button class="acionar" data-acionar="questionarioFornecedor">Acionar</button></td></tr>
            <tr><td><b>Aviso de privacidade</b><span class="sub">CMP-028 · Campanha</span></td><td>Privacidade · art. 23<span class="sub">publicidade das hipóteses</span></td><td>128.000 cidadãos</td><td><span class="chip chip-ok">Entregue</span></td><td><button class="acionar" data-acionar="avisoPolitica">Acionar</button></td></tr>
            <tr><td><b>Comunicação do art. 48</b><span class="sub">CMP-033 · Campanha + canal de dúvidas</span></td><td>Privacidade · Incidente INC-0007</td><td>12.400 famílias</td><td><span class="chip chip-ok">Entregue · 3.180 dúvidas</span></td><td><button class="acionar" data-acionar="comunicarTitulares">Acionar</button></td></tr>
            <tr><td><b>Recertificação de acessos · 3º tri</b><span class="sub">CMP-036 · Sequência</span></td><td>Privacidade · Gestão de acessos<span class="sub">9 chefias e 14 fornecedores</span></td><td>23 responsáveis</td><td><span class="chip chip-ia">18 de 23</span></td><td><button class="acionar" data-acionar="recertificacao">Acionar</button></td></tr>
            <tr><td><b>Turmas de servidores</b><span class="sub">CMP-012 · Grupos</span></td><td>Privacidade · FRM-008<span class="sub">Treinamento</span></td><td>6 turmas · 3.140</td><td><span class="chip chip-ia">61% de trilha</span></td><td><button class="acionar" data-acionar="formarTurmas">Acionar</button></td></tr>
          </tbody></table></div>
      </div>`
    },

    /* ---------- Solicitações de titulares ---------- */
    {
      id: 'solicitacoes', nm: 'Solicitações de titulares', html: `
      <div class="jcrumb"><button data-mod="home">← Módulos</button><b>Solicitações de titulares</b></div>
      <div class="modacts"><button class="btn-add" data-novo="generico">+ Registrar solicitação</button><button class="btn-sec" data-mod="canal">Abrir o canal na Central de atendimento</button></div>
      <div class="ah"><div class="ah-col ah-a"><b>O agente resolve sozinho</b><i>Recebe o pedido a qualquer hora e <b>abre o protocolo na hora, sem exigir documento</b>. Consulta as secretarias, consolida as respostas e, depois de confirmar identidade, entrega o que é padrão — acesso, correção e extrato.</i></div><div class="ah-col ah-h"><b>Escala para humano</b><i>Conflito entre direito pedido e retenção obrigatória · recusa de qualquer pedido · dado sensível · representação de menor em dúvida · pedido que envolva decisão jurídica.</i></div></div>
      <p class="jsub">Pedidos do cidadão (art. 18) com prazo correndo desde a primeira mensagem, procedência de quem pediu e desfecho fundamentado.</p>
      <div class="clock ok" id="clkDsar">
        <span class="cv">5,2 dias</span>
        <span class="cl"><b>Prazo médio de resposta.</b> A LGPD dá <b>15 dias corridos</b> para o pedido de acesso (art. 19, §2º). O que puxa a média para cima no município é o dado espalhado por secretarias que não se falam.</span>
      </div>
      <div class="kanban" id="kanban"></div>
      <div class="card2" style="margin-bottom:11px">
        <h4>Quando confirmar identidade, e quando não <span class="hint">art. 18, §5º × art. 8º, §5º</span></h4>
        <p style="font-size:11.5px; color:var(--ink-soft); margin-bottom:9px">
          Verificar é proporcional ao <b>risco de entregar à pessoa errada</b>. Verificação demais vira barreira
          a um direito; verificação de menos vira vazamento. E há um limite que se esquece: <b>não se pode exigir
          dado novo só para verificar</b> — pedir CPF e selfie para responder “vocês têm meus dados?” transforma
          a própria verificação em coleta excessiva.
        </p>
        <div class="ah">
          <div class="ah-col ah-a"><b>Responde sem confirmar identidade</b><i>
            Pergunta sobre o tratamento em abstrato — quais dados a prefeitura pede, para quê, por quanto tempo,
            com que base legal. Não há dado pessoal na resposta (art. 9º).<br>
            <b>Registro do pedido e abertura de protocolo</b>: o prazo corre da solicitação, então travar o
            registro atrás de verificação é atrasar o próprio prazo.<br>
            <b>Revogar comunicação</b> a partir do número que recebe a mensagem: a posse do canal identifica, e
            o art. 8º, §5º manda que revogar seja facilitado. Errar é reversível — a pessoa religa.<br>
            Encaminhamento para outro setor, quando não há dado pessoal na resposta.<br>
            Andamento do próprio protocolo — prazo e fase, nunca conteúdo.
          </i></div>
          <div class="ah-col ah-h"><b>Só entrega após confirmar</b><i>
            Qualquer entrega de dado pessoal, ainda que a pessoa já esteja identificada pelo telefone.<br>
            <b>Dado sensível</b> — saúde, laudo social, biometria — com exigência reforçada.<br>
            <b>Dado de menor</b>: confirma-se o titular <b>e</b> o vínculo do responsável legal (art. 14).<br>
            Eliminação, portabilidade e correção cadastral, porque o efeito é irreversível ou transferível.<br>
            Pedido vindo de canal diferente do cadastrado.<br>
            <b>Autoridade requisitante</b> — MP, Judiciário, ANPD, Controladoria — não se verifica como titular:
            verifica-se a requisição e a competência.
          </i></div>
        </div>
      </div>

      <div class="card2" style="margin-bottom:11px">
        <h4>Hoje é pergunta. O que poderia ser consulta. <span class="hint">o manual é o piso, não o teto</span></h4>
        <p style="font-size:11.5px; color:var(--ink-soft); margin-bottom:8px">
          A plataforma <b>não acessa os sistemas do município</b>. Para apurar um pedido, ela pergunta a quem
          responde por cada base e consolida as respostas. Funciona sem integração nenhuma — e é por isso que a
          implantação leva semanas. Conforme cada sistema for conectado, a pergunta vira consulta e o prazo cai.
        </p>
        <div class="tblwrap"><table class="tbl"><thead><tr>
          <th>Secretaria</th><th>Sistema</th><th>Hoje</th><th>Conectável?</th><th>Resposta</th></tr></thead><tbody>
          <tr><td><b>Fazenda</b></td><td>Tributário municipal</td><td>pergunta à chefia</td><td><span class="chip chip-ok">Sim · webservice</span></td><td>2h → segundos</td></tr>
          <tr><td><b>Educação</b></td><td>Matrícula e fila</td><td>pergunta à chefia</td><td><span class="chip chip-ok">Sim · API</span></td><td>12min → segundos</td></tr>
          <tr><td><b>Assistência</b></td><td>CadÚnico</td><td>pergunta à chefia</td><td><span class="chip chip-hum">Sim · por convênio</span></td><td>1h → segundos</td></tr>
          <tr><td><b>Saúde</b></td><td>Prontuário legado</td><td>pergunta à chefia</td><td><span class="chip chip-bad">Não · sem API</span></td><td>segue pergunta</td></tr>
          <tr><td><b>Procuradoria</b></td><td>não há sistema</td><td>pergunta à chefia</td><td><span class="chip chip-bad">Não existe</span></td><td>sempre pergunta</td></tr>
        </tbody></table></div>
        <p class="rule">
          Três das cinco são conectáveis. Com elas ligadas, as 15 horas da última apuração viriam para cerca de
          <b>40 minutos</b>, e o esforço humano ficaria só onde não há sistema. Começar perguntando é o que
          permite entregar em semanas; a integração entra depois, uma secretaria por vez.
        </p>
      </div>

      <div class="grid g2" style="margin-top:11px">
        <div class="card2">
          <h4>Direitos exercidos no mês <span class="hint">art. 18</span></h4>
          <div class="frow"><span class="fl">Acesso aos dados (II)</span><span class="fbar"><i style="width:46%"></i></span><span class="fv">19</span></div>
          <div class="frow"><span class="fl">Correção (III)</span><span class="fbar"><i style="width:27%"></i></span><span class="fv">11</span></div>
          <div class="frow"><span class="fl">Eliminação (VI)</span><span class="fbar"><i style="width:17%"></i></span><span class="fv">7</span></div>
          <div class="frow"><span class="fl">Revogação de consentimento (IX)</span><span class="fbar"><i style="width:10%"></i></span><span class="fv">4</span></div>
        </div>
        <div class="card2">
          <h4>Pedidos de LAI · encaminhados <span class="hint">não é direito de titular</span></h4>
          <p style="font-size:11.5px; color:var(--ink-soft); margin-bottom:8px">
            Pedido de acesso à informação (Lei 12.527) não é tratado aqui. O agente reconhece, <b>abre o protocolo</b>,
            encaminha ao setor responsável e informa ao cidadão que <b>a resposta virá pelo canal do e-SIC</b> —
            não por este número. O Encarregado apenas acompanha para que dado pessoal de terceiro não saia por engano.
          </p>
          <div class="tblwrap"><table class="tbl"><thead><tr>
            <th>Chamado</th><th>Assunto</th><th>Encaminhado a</th><th>Prazo</th></tr></thead>
            <tbody id="tblLai">
              <tr><td class="mono">LAI-0448</td><td>Contratos da coleta de lixo</td><td>Serviços Urbanos</td><td><span class="chip chip-ok">Respondido</span></td></tr>
              <tr><td class="mono">LAI-0446</td><td>Diárias pagas ao gabinete</td><td>Controladoria</td><td><span class="chip chip-ia">4 de 20 dias</span></td></tr>
              <tr><td class="mono">LAI-0441</td><td>Nomes e CPFs dos comissionados</td><td>Administração</td><td><span class="chip chip-bad">Parcial · CPF negado</span></td></tr>
            </tbody></table></div>
        </div>
      </div>`
    },

    /* ---------- Consentimento ---------- */
    {
      id: 'consentimentos', nm: 'Consentimento', html: `
      <div class="jcrumb"><button data-mod="home">← Módulos</button><b>Consentimento</b></div>
      <div class="modacts"><button class="btn-add" data-novo="finalidade">+ Nova finalidade</button><button class="btn-sec" data-novo="consentimento">Incluir ou retirar consentimento</button></div>
      <div class="ah"><div class="ah-col ah-a"><b>O agente resolve sozinho</b><i>Registra inclusão, retirada e recusa na conversa, com prova; entrega o extrato de bases legais; bloqueia o que está sem base antes de qualquer ação.</i></div><div class="ah-col ah-h"><b>Escala para humano</b><i>Criação de finalidade nova · escolha da base legal · mudança de versão do aviso · qualquer caso em que a base seja duvidosa.</i></div></div>
      <p class="jsub">Finalidade por finalidade, com prova do aceite e também da recusa. No município a maior parte
      do contato <b>não depende</b> de consentimento — e é justamente por isso que cada base precisa estar registrada.</p>
      <div class="tiles">
        <div class="tile t2"><div class="tl">Consentimentos válidos</div><div class="tv" id="cValidos">21.480</div><div class="td">só para o que é opcional</div></div>
        <div class="tile t4"><div class="tl">Sem base legal válida</div><div class="tv" id="cSem">3.902</div><div class="td">nenhuma ação possível até colher base</div></div>
        <div class="tile t1"><div class="tl">Revogações no mês</div><div class="tv" id="cRevog">311</div><div class="td">tempo médio 9s</div></div>
        <div class="tile t3"><div class="tl">Aviso de privacidade</div><div class="tv">v2</div><div class="td">desde 14/05/2026</div></div>
      </div>
      <div class="grid g2">
        <div class="card2">
          <h4>Finalidades × base legal <span class="hint">art. 7º e 11</span></h4>
          <div class="tblwrap"><table class="tbl"><thead><tr>
            <th>Finalidade</th><th>Base legal</th><th>Fonte</th><th>Cidadãos</th><th>Status</th></tr></thead>
            <tbody id="tblFinal">
              <tr><td><b>Convocação de vacinação</b><span class="sub">Sec. de Saúde</span></td><td>Tutela da saúde (art. 11, II, f)</td><td>Lei 8.080/90 e programa municipal<span class="sub">decreto 412/2025</span></td><td>128.000</td><td><span class="chip chip-ok">Válida</span></td></tr>
              <tr><td><b>Aviso de IPTU e dívida ativa</b><span class="sub">Sec. de Fazenda</span></td><td>Obrigação legal (art. 7º, II)</td><td>Código Tributário Municipal<span class="sub">lei 2.887/2003</span></td><td>54.200</td><td><span class="chip chip-ok">Válida</span></td></tr>
              <tr><td><b>Fila da creche e matrícula</b><span class="sub">Sec. de Educação</span></td><td>Política pública (art. 7º, III)</td><td>Programa municipal de creches<span class="sub">decreto 388/2024</span></td><td>18.400</td><td><span class="chip chip-ok">Válida</span></td></tr>
              <tr><td><b>Informativo do gabinete</b><span class="sub">Gabinete · opcional</span></td><td>Consentimento (art. 7º, I)</td><td>Cadastro no site e termo no balcão<span class="sub">21.480 registros com prova</span></td><td>21.480</td><td><span class="chip chip-ok">Válida</span></td></tr>
              <tr><td><b>Foto de aluno em grupo de turma</b><span class="sub">Sec. de Educação · menores</span></td><td>—</td><td><b style="color:var(--bad)">Nenhuma fonte registrada</b><span class="sub">prática informal das creches</span></td><td>1.180</td><td><span class="chip chip-bad">Sem base</span></td></tr>
            </tbody></table></div>
        </div>
        <div class="card2">
          <h4>Prova de consentimento <span class="hint">o que a ANPD pede</span></h4>
          <p style="font-size:11.5px; color:var(--ink-soft); margin-bottom:8px">
            Cada opt-in e cada revogação guarda <b>quem, quando, por qual canal, com qual texto exato e em qual
            versão do aviso</b>. Sem isso o consentimento não se prova — e o ônus é do controlador (art. 8º, §2º).
          </p>
          <div class="tblwrap"><table class="tbl"><thead><tr><th>Hora</th><th>Evento</th><th>Prova</th></tr></thead>
            <tbody id="tblProva">
              <tr><td class="mono">08:57</td><td>Revogação · Iolanda Freire · informativo</td><td>WhatsApp · v2 · hash a91f…</td></tr>
              <tr><td class="mono">08:12</td><td>Consentimento · aviso de vaga em creche</td><td>WhatsApp · v2 · hash 7c02…</td></tr>
              <tr><td class="mono">07:44</td><td>Recusa · informativo do gabinete</td><td>WhatsApp · v2 · hash 55de…</td></tr>
            </tbody></table></div>
        </div>
      </div>
      <div class="grid g2" style="margin-top:11px">
        <div class="card2">
          <h4>Onde o consentimento é colhido <span class="hint">últimos 90 dias</span></h4>
          <div class="frow"><span class="fl">Na conversa que o próprio cidadão iniciou</span><span class="fbar"><i class="ok" id="capA" style="width:0%"></i></span><span class="fv" id="capAV">—</span></div>
          <div class="frow"><span class="fl">No balcão, com termo digitalizado</span><span class="fbar"><i id="capB" style="width:0%"></i></span><span class="fv" id="capBV">—</span></div>
          <div class="frow"><span class="fl">No cadastro do portal, com cláusula destacada</span><span class="fbar"><i id="capC" style="width:0%"></i></span><span class="fv" id="capCV">—</span></div>
          <div class="frow"><span class="fl">Ativa, a quem já tem relação e base</span><span class="fbar"><i class="warn" id="capD" style="width:0%"></i></span><span class="fv" id="capDV">—</span></div>
          <div class="frow"><span class="fl">A base fria, pedindo permissão</span><span class="fbar"><i class="bad" style="width:0%"></i></span><span class="fv">0</span></div>
          <p class="rule" id="capNota">
            <b>A regra que ordena tudo:</b> consentimento nunca é a base para <i>iniciar</i> o contato.
            Ele é sempre colhido dentro de um contato que já tinha outra base legal — e no município
            quase sempre tem: política pública, obrigação legal ou tutela da saúde.
          </p>
        </div>
        <div class="card2">
          <h4>O que faz a prova valer <span class="hint">art. 8º</span></h4>
          <ul class="rules">
            <li><span class="mk">✓</span><span><b>Uma finalidade por vez</b>, com nome que a pessoa entende — “te avisar de vaga na creche”, não “comunicação institucional”.</span></li>
            <li><span class="mk">✓</span><span><b>As duas saídas visíveis</b> na mesma tela. Nada pré-marcado, e silêncio não vale como sim.</span></li>
            <li><span class="mk">✓</span><span><b>O texto exato que ela viu</b> arquivado junto com a resposta.</span></li>
            <li><span class="mk">✓</span><span><b>A recusa também é registrada</b>, com o mesmo peso, e evita reperguntar.</span></li>
            <li><span class="mk">✓</span><span><b>Revogar custa o mesmo que aceitar</b>: mesma conversa, mesmo esforço (§5º).</span></li>
            <li class="no"><span class="mk">✕</span><span><b>Nada condicionado.</b> Recusar não pode travar acesso a serviço público — se travar, não foi livre.</span></li>
            <li class="no"><span class="mk">✕</span><span><b>Nada genérico.</b> Autorização ampla para “usos da administração” é nula de origem (§4º).</span></li>
          </ul>
        </div>
      </div>`
    },

    /* ---------- Mapa de dados ---------- */
    {
      id: 'inventario', nm: 'Mapa de dados', html: `
      <div class="jcrumb"><button data-mod="home">← Módulos</button><b>Mapa de dados</b></div>
      <div class="modacts"><button class="btn-add" data-novo="generico">+ Nova operação</button><button class="btn-sec" data-novo="campanha">Disparar revisão</button></div>
      <div class="ah"><div class="ah-col ah-a"><b>O agente resolve sozinho</b><i>Entrevista os donos de área, estrutura a resposta em linguagem livre e atualiza o registro, com a evidência de quem respondeu e quando.</i></div><div class="ah-col ah-h"><b>Escala para humano</b><i>Classificação de operação sem base legal · achado que envolva menor ou dado sensível · decisão sobre descontinuar uma prática.</i></div></div>
      <p class="jsub">Inventário e registro das operações de tratamento (art. 37), alimentado pelas respostas dos donos de cada secretaria.</p>
      <div class="tiles">
        <div class="tile t3"><div class="tl">Cobertura do inventário</div><div class="tv" id="ropaCob">68%</div><div class="td">operações revisadas nos últimos 12 meses</div></div>
        <div class="tile t2"><div class="tl">Operações mapeadas</div><div class="tv" id="ropaTot">64</div><div class="td">em 9 secretarias</div></div>
        <div class="tile t4"><div class="tl">Revisão vencida</div><div class="tv" id="ropaVenc">11</div><div class="td">acima de 12 meses sem revisão</div></div>
        <div class="tile t1"><div class="tl">Entrevistas em curso</div><div class="tv" id="ropaEnt">4</div><div class="td">por WhatsApp, com os donos de área</div></div>
      </div>
      <div class="card2">
        <h4>Registro das operações de tratamento <span class="hint">art. 37 · o “RoPA” do jargão</span></h4>
        <div class="tblwrap"><table class="tbl"><thead><tr>
          <th>Secretaria / operação</th><th>Dados tratados</th><th>Base legal</th><th>Retenção</th><th>Revisão</th></tr></thead>
          <tbody id="tblRopa">
            <tr><td><b>Educação · fila da creche</b></td><td>Nome e nascimento de <b>menor</b>, renda familiar, endereço</td><td>Política pública (art. 7º, III)</td><td>Enquanto durar o programa</td><td><span class="chip chip-bad">Vencida · 14 meses</span></td></tr>
            <tr><td><b>Assistência · CadÚnico</b></td><td>Composição familiar, renda, laudo social</td><td>Política pública (art. 7º, III)</td><td>Indefinida</td><td><span class="chip chip-bad">Vencida · 16 meses</span></td></tr>
            <tr><td><b>Saúde · prontuário da UBS</b></td><td>Histórico clínico, vacinação, exames</td><td>Tutela da saúde (art. 11, II, f)</td><td>20 anos</td><td><span class="chip chip-ok">Atualizada</span></td></tr>
            <tr><td><b>Fazenda · IPTU e dívida ativa</b></td><td>CPF, endereço, valor devido</td><td>Obrigação legal (art. 7º, II)</td><td>Prazo prescricional</td><td><span class="chip chip-ok">Atualizada</span></td></tr>
            <tr><td><b>Administração · folha e RH</b></td><td>CPF, conta bancária, atestado</td><td>Obrigação legal</td><td>30 anos (previdenciário)</td><td><span class="chip chip-hum">Em revisão</span></td></tr>
          </tbody></table></div>
      </div>
      <div class="card2" style="margin-top:11px">
        <h4>Entrevista conversacional <span class="hint">a planilha que ninguém preenche</span></h4>
        <p style="font-size:11.5px; color:var(--ink-soft)">
          O agente puxa cada operação do registro e pergunta ao dono da secretaria <b>pelo WhatsApp</b>,
          em linguagem comum, se ainda é assim. A resposta volta estruturada e o registro se atualiza sozinho —
          com a evidência de quem respondeu e quando.
        </p>
        <div class="frow" style="margin-top:7px"><span class="fl">Taxa de resposta · formulário por e-mail</span><span class="fbar"><i class="bad" style="width:23%"></i></span><span class="fv">23%</span></div>
        <div class="frow"><span class="fl">Taxa de resposta · entrevista no WhatsApp</span><span class="fbar"><i class="ok" style="width:91%"></i></span><span class="fv">91%</span></div>
      </div>`
    },

    /* ---------- Incidentes ---------- */
    {
      id: 'incidentes', nm: 'Incidentes', html: `
      <div class="jcrumb"><button data-mod="home">← Módulos</button><b>Incidentes</b></div>
      <div class="modacts"><button class="btn-add" data-novo="generico">+ Registrar incidente</button></div>
      <div class="ah"><div class="ah-col ah-a"><b>O agente resolve sozinho</b><i>Recebe o caso de quem identificou, abre o item com o prazo, aciona a sala de resposta e atende as dúvidas dos titulares comunicados.</i></div><div class="ah-col ah-h"><b>Escala para humano</b><i>Avaliação de risco relevante · texto da comunicação à ANPD · decisão de comunicar ou não · aprovação do plano de ação.</i></div></div>
      <p class="jsub">Art. 48, com relógio de 3 dias úteis, procedência de quem abriu e histórico auditável do item.</p>
      <div class="clock ok" id="clkAnpd">
        <span class="cv">sem incidente aberto</span>
        <span class="cl"><b>Data de validade do item no painel.</b> A comunicação à ANPD e aos titulares tem prazo de <b>3 dias úteis</b> a partir do conhecimento (Res. CD/ANPD nº 15/2024). No município ainda entra a prestação de contas à Controladoria.</span>
      </div>
      <div class="grid g2">
        <div class="card2">
          <h4>Painel <b>Incidentes</b> · CRM <span class="hint">quem abriu, quando e por quê</span></h4>
          <div class="kcard" id="incCard" style="cursor:default">
            <span class="kid" id="incId">—</span>
            <b id="incTit">Nenhum incidente aberto</b>
            <span class="kd" id="incKd">o painel fica vazio até alguém registrar um caso</span>
            <span class="krow"><span class="chip chip-neutral" id="incFase">—</span><span class="kd" id="incResp">—</span></span>
            <span class="kd" id="incOrig">Origem: —</span>
          </div>
          <p style="font-size:11px; color:var(--ink-faint); margin-top:9px">
            Na Central de atendimento não existe um objeto “incidente”. Ele vive como <b>item de um painel Kanban dedicado</b>:
            ID, etiquetas, responsável, <b>data de validade</b> — que é o prazo da ANPD —, anotações
            “Enviado por API” e histórico. É o histórico do item que vira a linha do tempo para a autoridade.
          </p>
          <p style="font-size:11px; color:var(--ink-faint); margin-top:6px">
            Fora da plataforma o registro é em três lugares: o registro interno de incidentes, a
            <b>comunicação à ANPD</b> pelo formulário eletrônico no gov.br e a comunicação aos titulares.
          </p>
        </div>
        <div class="card2">
          <h4>Fases do painel <span class="hint">art. 48</span></h4>
          <div class="steps" id="stpInc">
            <div class="stp"><span class="mk"></span><span>Registro por quem identificou<span class="sd">servidor, TI, chefia, auditoria, Controladoria ou denúncia do cidadão</span></span></div>
            <div class="stp"><span class="mk"></span><span>Contenção<span class="sd">revogar acesso, encerrar sessão, preservar log</span></span></div>
            <div class="stp"><span class="mk"></span><span>Avaliação de risco<span class="sd">quais dados, quantos titulares, risco relevante?</span></span></div>
            <div class="stp"><span class="mk"></span><span>Comunicação à ANPD<span class="sd">formulário com os campos exigidos</span></span></div>
            <div class="stp"><span class="mk"></span><span>Comunicação aos cidadãos<span class="sd">obrigação do art. 48, no canal em que já falam com a prefeitura</span></span></div>
            <div class="stp"><span class="mk"></span><span>Encerramento e plano de ação<span class="sd">relatório com a linha do tempo completa</span></span></div>
          </div>
        </div>
      </div>
      <div class="grid g2" style="margin-top:11px">
        <div class="card2">
          <h4>Situação</h4>
          <div id="incBox" style="font-size:11.5px; color:var(--ink-faint)">
            Nenhum incidente aberto. O painel só recebe caso registrado por quem identificou —
            servidor, TI, chefia de secretaria, auditoria interna, Controladoria ou o próprio cidadão.
          </div>
          <div class="frow" style="margin-top:9px"><span class="fl">Incidentes nos 12 meses</span><span class="fbar"><i style="width:12%"></i></span><span class="fv">2</span></div>
          <div class="frow"><span class="fl">Comunicados no prazo</span><span class="fbar"><i class="ok" style="width:100%"></i></span><span class="fv">2/2</span></div>
          <div class="frow"><span class="fl">Tempo médio detecção → contenção</span><span class="fbar"><i class="ok" style="width:17%"></i></span><span class="fv">26min</span></div>
        </div>
        <div class="card2">
          <h4>Comunicação aos cidadãos</h4>
          <div class="frow"><span class="fl">Titulares afetados</span><span class="fbar"><i id="incAfet" style="width:0%"></i></span><span class="fv" id="incAfetV">—</span></div>
          <div class="frow"><span class="fl">Comunicados (WhatsApp)</span><span class="fbar"><i class="ok" id="incCom" style="width:0%"></i></span><span class="fv" id="incComV">—</span></div>
          <div class="frow"><span class="fl">Dúvidas atendidas pelo agente</span><span class="fbar"><i id="incDuv" style="width:0%"></i></span><span class="fv" id="incDuvV">—</span></div>
        </div>
      </div>`
    },

    /* ---------- Treinamento ---------- */
    {
      id: 'treinamento', nm: 'Treinamento', html: `
      <div class="jcrumb"><button data-mod="home">← Módulos</button><b>Treinamento</b></div>
      <div class="modacts"><button class="btn-add" data-novo="generico">+ Nova turma</button><button class="btn-sec" data-novo="campanha">Disparar relâmpago</button><button class="btn-sec" data-novo="campanha">Disparar recertificação de acessos</button></div>
      <div class="ah"><div class="ah-col ah-a"><b>O agente resolve sozinho</b><i>Forma as turmas, entrega a trilha e o relâmpago, responde dúvidas no grupo e registra a prova por pessoa.</i></div><div class="ah-col ah-h"><b>Escala para humano</b><i>Qualquer dúvida de interpretação jurídica · caso disciplinar · decisão sobre reprovar ou refazer trilha · <b>revogação de credencial</b>, que é execução do TI, e a decisão sobre lacuna de fornecedor.</i></div></div>
      <p class="jsub">Turmas de servidores por exposição a dado pessoal, trilha inicial na implantação e atualização relâmpago disparada por gatilho.</p>
      <div class="tiles">
        <div class="tile t2"><div class="tl">Turmas formadas</div><div class="tv" id="trTurmas">6</div><div class="td">uma por exposição a dado pessoal</div></div>
        <div class="tile t3"><div class="tl">Trilha inicial concluída</div><div class="tv" id="trDia">61%</div><div class="td">3.140 servidores</div></div>
        <div class="tile t4"><div class="tl">Relâmpagos no trimestre</div><div class="tv" id="trRel">3</div><div class="td">disparados por gatilho, não por calendário</div></div>
        <div class="tile t1"><div class="tl">Evidências no mês</div><div class="tv" id="evCount">9.420</div><div class="td">trilha pronta para auditoria</div></div>
      </div>
      <div class="card2">
        <h4>Turmas <span class="hint">grupo próprio, agente de dúvidas e prova por pessoa</span></h4>
        <div class="tblwrap"><table class="tbl"><thead><tr>
          <th>Turma</th><th>Servidores</th><th>Grupo e agente</th><th>Trilha inicial</th><th>Último relâmpago</th></tr></thead>
          <tbody id="tblTurmas">
            <tr><td><b>Assistência Social</b><span class="sub">CadÚnico e laudo social</span></td><td>212</td><td><span class="chip chip-ok">Ativos</span></td><td id="trRhPct">78%</td><td id="trRhRel">19/08 · rotina de exoneração</td></tr>
            <tr><td><b>Saúde · UBS e vacinação</b></td><td>640</td><td><span class="chip chip-ok">Ativos</span></td><td>74%</td><td>12/08 · dado de saúde por engano</td></tr>
            <tr><td><b>Educação · escolas e creches</b></td><td>1.480</td><td><span class="chip chip-ok">Ativos</span></td><td>52%</td><td>03/08 · imagem de aluno</td></tr>
            <tr><td><b>Administração e RH</b></td><td>186</td><td><span class="chip chip-ok">Ativos</span></td><td>81%</td><td>19/08 · rotina de exoneração</td></tr>
            <tr><td><b>TI e sistemas</b></td><td>24</td><td><span class="chip chip-ok">Ativos</span></td><td>92%</td><td>19/08 · exportação de base</td></tr>
            <tr><td><b>Atendimento ao cidadão</b><span class="sub">protocolo e balcão</span></td><td>598</td><td><span class="chip chip-hum">Em formação</span></td><td>39%</td><td>—</td></tr>
          </tbody></table></div>
      </div>
      <div class="grid g2" style="margin-top:11px">
        <div class="card2">
          <h4>Atualização relâmpago <span class="hint">gatilho, não calendário</span></h4>
          <p style="font-size:11.5px; color:var(--ink-soft); margin-bottom:8px">
            Um incidente — do município ou de outra prefeitura — ou um achado no processo vira, na mesma semana,
            uma mensagem de <b>2 minutos no grupo das turmas expostas</b>: quatro linhas sem culpar ninguém,
            uma pergunta, e a resposta de cada servidor vira prova com data e conteúdo.
          </p>
          <div class="tblwrap"><table class="tbl"><thead><tr><th>Gatilho</th><th>Turmas</th><th>Resposta</th></tr></thead>
            <tbody id="tblRelampago">
              <tr><td><b>Vazamento em outra prefeitura</b><span class="sub">notícia · 19/08</span></td><td>Administração, TI</td><td>198 de 210</td></tr>
              <tr><td><b>Achado do inventário</b><span class="sub">imagem de aluno em grupo · 03/08</span></td><td>Educação</td><td>1.104 de 1.480</td></tr>
              <tr><td><b>Quase-incidente interno</b><span class="sub">exame para número errado · 12/08</span></td><td>Saúde</td><td>602 de 640</td></tr>
            </tbody></table></div>
        </div>
        <div class="card2">
          <h4>Recertificação de acessos <span class="hint">a plataforma pergunta a quem responde</span></h4>
          <div class="tblwrap"><table class="tbl"><thead><tr><th>Área ou fornecedor</th><th>Acessos sob responsabilidade</th><th>Última confirmação</th><th>Situação</th></tr></thead>
            <tbody id="tblAlertas">
              <tr><td>Assistência Social<span class="sub">Rosana Vidal · chefia</span></td><td>7 pessoas<span class="sub">CadÚnico</span></td><td>hoje</td><td><span class="chip chip-bad">1 exonerada · revogar</span></td></tr>
              <tr><td>Educação<span class="sub">Silvana Rocha · chefia</span></td><td>34 pessoas<span class="sub">matrícula e fila</span></td><td>28/08</td><td><span class="chip chip-ok">Confirmada</span></td></tr>
              <tr><td>Folha Prisma<span class="sub">fornecedor · contato Deise</span></td><td>4 pessoas<span class="sub">folha de servidores</span></td><td><b style="color:var(--bad)">sem resposta há 12 dias</b></td><td><span class="chip chip-bad">Lacuna registrada</span></td></tr>
              <tr><td>TI e sistemas<span class="sub">Bruno Tavares · chefia</span></td><td>24 pessoas<span class="sub">acesso administrativo</span></td><td>26/08</td><td><span class="chip chip-hum">2 a revisar</span></td></tr>
            </tbody></table></div>
          <p style="font-size:11px; color:var(--ink-faint); margin-top:7px">
            <b>A plataforma não lê log nem varre sistema.</b> Ela pergunta a quem responde. A cada trimestre —
            e sempre que o RH registra uma exoneração ou um contrato termina — cada chefia de secretaria e cada
            responsável por fornecedor recebe a lista de quem tem acesso sob a responsabilidade dele, com três
            perguntas por pessoa: <b>ainda está ativa? o acesso ainda é necessário? a credencial foi atualizada
            ou eliminada?</b>
          </p>
          <p style="font-size:11px; color:var(--ink-faint); margin-top:6px">
            A resposta volta estruturada, vira <b>evidência com data</b> e gera tarefa para o TI revogar o que
            sobrou. Quem não responde não fica em silêncio: vira <b>lacuna registrada</b>, como a Folha Prisma
            acima, e sobe para decisão do controlador.
          </p>
          <p style="font-size:11px; color:var(--ink-faint); margin-top:6px">
            <b>Era o controle que faltava no INC-0007.</b> O servidor exonerado em 12/08 apareceria na lista da
            chefia na recertificação seguinte, que responderia “não trabalha mais aqui” — e a credencial teria
            sido cortada antes da madrugada de 30/08.
          </p>
          <p style="font-size:11px; color:var(--ink-faint); margin-top:6px">
            <b>Limite legal:</b> recertificar acesso é tratamento de dado do servidor. Exige base legal própria,
            transparência e proporcionalidade — e por isso a pergunta é sobre <b>o vínculo e a necessidade do
            acesso</b>, nunca sobre o que a pessoa fez.
          </p>
          <p style="font-size:11px; color:var(--ink-faint); margin-top:6px">
            <b>Hoje é pergunta; poderia ser cruzamento.</b> Se a folha e o diretório de usuários forem
            conectados, a plataforma compara sozinha quem foi exonerado com quem ainda tem credencial ativa, e a
            chefia recebe só <b>o que já veio divergente</b> para confirmar — de sete perguntas para uma. Sem a
            conexão, o controle continua funcionando; só custa mais tempo de quem responde.
          </p>
        </div>
      </div>
      <div class="card2" style="margin-top:11px">
        <h4>Trilha de auditoria <span class="hint">exportável para a ANPD, a Controladoria e o cidadão</span></h4>
        <div class="tblwrap"><table class="tbl"><thead><tr><th style="width:60px">Hora</th><th>Evento</th><th style="width:120px">Responsável</th></tr></thead>
          <tbody id="tblEvid">
            <tr><td class="mono">09:48</td><td>Relatório de dados entregue ao cidadão · protocolo DT-0391</td><td>Agente de IA</td></tr>
            <tr><td class="mono">08:57</td><td>Revogação registrada · Iolanda Freire · informativo</td><td>Agente de IA</td></tr>
            <tr><td class="mono">08:12</td><td>Acesso ao CadÚnico auditado · usuário ti-0114</td><td>Monitor</td></tr>
          </tbody></table></div>
      </div>`
    },

    /* ---------- Conformidade ---------- */
    {
      id: 'conformidade', nm: 'Conformidade e evidências', html: `
      <div class="jcrumb"><button data-mod="home">← Módulos</button><b>Conformidade e evidências</b></div>
      <div class="modacts"><button class="btn-add" data-novo="generico">Exportar evidências</button></div>
      <div class="ah"><div class="ah-col ah-a"><b>O agente resolve sozinho</b><i>Consolida os indicadores, monta o dossiê probatório e exporta a evidência com hash.</i></div><div class="ah-col ah-h"><b>Escala para humano</b><i>Interpretação do índice · tese jurídica · o que vai ou não para a ANPD, a Controladoria ou o juízo.</i></div></div>
      <p class="jsub">Índice de conformidade, prazos cumpridos e a trilha exportável para auditoria, para a ANPD ou para o cidadão.</p>
      <div class="tiles">
        <div class="tile t1"><div class="tl">Solicitações abertas</div><div class="tv" id="kAbertas">8</div><div class="td">em 9 secretarias</div></div>
        <div class="tile t2"><div class="tl">Novas no período</div><div class="tv" id="kNovas">41</div><div class="td">agosto/2026</div></div>
        <div class="tile t3"><div class="tl">Respondidas no prazo</div><div class="tv" id="kPrazo">96%</div><div class="td">39 de 41 concluídas</div></div>
        <div class="tile t4"><div class="tl">Vencendo em 72h</div><div class="tv" id="kVence">2</div><div class="td">alerta automático ao Encarregado</div></div>
      </div>
      <div class="grid g2">
        <div class="card2">
          <h4>Índice de conformidade <span class="hint">Prefeitura de Santa Rita</span></h4>
          <div class="frow"><span class="fl">Índice geral</span><span class="fbar"><i class="bad" id="ixPrefeitura" style="width:63%"></i></span><span class="fv" id="ixPrefeituraV">63</span></div>
          <div class="frow"><span class="fl">Prazo das solicitações</span><span class="fbar"><i class="ok" style="width:96%"></i></span><span class="fv">96</span></div>
          <div class="frow"><span class="fl">Cobertura do inventário</span><span class="fbar"><i class="warn" style="width:68%"></i></span><span class="fv">68</span></div>
          <div class="frow"><span class="fl">Bases legais registradas</span><span class="fbar"><i class="warn" style="width:74%"></i></span><span class="fv">74</span></div>
          <div class="frow"><span class="fl">Treinamento em dia</span><span class="fbar"><i class="bad" style="width:61%"></i></span><span class="fv">61</span></div>
          <div class="frow"><span class="fl">Obrigações do art. 23</span><span class="fbar"><i class="bad" style="width:40%"></i></span><span class="fv">40</span></div>
        </div>
        <div class="card2">
          <h4>Solicitações por dia</h4>
          <div class="bars">
            <div class="bar"><b>3</b><i style="height:32px"></i>seg</div>
            <div class="bar"><b>5</b><i style="height:54px"></i>ter</div>
            <div class="bar today"><b id="barHojeN">4</b><i id="barHoje" style="height:42px"></i>qua</div>
            <div class="bar"><b>—</b><i style="height:6px"></i>qui</div>
            <div class="bar"><b>—</b><i style="height:6px"></i>sex</div>
          </div>
        </div>
      </div>
      <div class="grid g2" style="margin-top:11px">
        <div class="card2">
          <h4>Volume por hora <span class="hint">pico às 19:00h</span></h4>
          <div class="heat">
            <span class="hl">08–11</span><i style="opacity:.35"></i><i style="opacity:.5"></i><i style="opacity:.55"></i><i style="opacity:.4"></i><i style="opacity:.2"></i><i style="opacity:.15"></i>
            <span class="hl">11–14</span><i style="opacity:.4"></i><i style="opacity:.55"></i><i style="opacity:.5"></i><i style="opacity:.45"></i><i style="opacity:.3"></i><i style="opacity:.2"></i>
            <span class="hl">14–18</span><i style="opacity:.5"></i><i style="opacity:.6"></i><i style="opacity:.6"></i><i style="opacity:.55"></i><i style="opacity:.35"></i><i style="opacity:.25"></i>
            <span class="hl">18–22</span><i style="opacity:.85"></i><i style="opacity:1"></i><i style="opacity:.9"></i><i style="opacity:.8"></i><i style="opacity:.6"></i><i style="opacity:.35"></i>
          </div>
          <p style="font-size:11px; color:var(--ink-faint); margin-top:8px">
            O cidadão exerce direito depois do trabalho, quando a prefeitura está fechada. Um canal de balcão
            perderia o pedido; o agente responde e já registra o protocolo.
          </p>
        </div>
        <div class="card2">
          <h4>Relatório ao controlador</h4>
          <p style="font-size:11.5px; color:var(--ink-soft)">
            Todo dia 1º o Secretário de Administração recebe, no WhatsApp, o relatório do mês:
            direitos atendidos, prazos, incidentes, pendências do inventário e o que precisa de decisão dele.
          </p>
          <div class="frow" style="margin-top:8px"><span class="fl">Relatórios entregues no prazo</span><span class="fbar"><i class="ok" style="width:100%"></i></span><span class="fv">2/2</span></div>
          <div class="frow"><span class="fl">Pendências devolvidas ao controlador</span><span class="fbar"><i class="warn" style="width:46%"></i></span><span class="fv">6</span></div>
        </div>
      </div>`
    },

    /* ---------- Portal do Controlador ---------- */
    {
      id: 'portal', nm: 'Portal do Controlador', html: `
      <div class="jcrumb"><button data-mod="home">← Módulos</button><b>Portal do Controlador</b></div>
      <p class="jsub">A visão de quem contrata: escopo travado na conta do município, com a fila de decisões que só o controlador pode tomar.</p>
      <div class="tiles">
        <div class="tile t3"><div class="tl">Índice de conformidade</div><div class="tv" id="pIndice">—</div><div class="td" id="pIndiceD">—</div></div>
        <div class="tile t2"><div class="tl">Solicitações no prazo</div><div class="tv" id="pPrazo">—</div><div class="td">cidadãos atendidos no período</div></div>
        <div class="tile t1"><div class="tl">Prazo médio de resposta</div><div class="tv" id="pMedio">—</div><div class="td">limite legal: 15 dias</div></div>
        <div class="tile t4"><div class="tl">Esperando você</div><div class="tv" id="pPend">—</div><div class="td">decisões que só o controlador toma</div></div>
      </div>
      <div class="card2">
        <h4>Decisões que dependem de você <span class="hint">o Encarregado orienta, quem decide é o controlador</span></h4>
        <div class="tblwrap"><table class="tbl"><thead><tr>
          <th>Decisão</th><th>Prazo</th><th>O que trava sem ela</th><th></th></tr></thead><tbody>
          <tr class="risk"><td><b>Publicar o aviso de privacidade das secretarias</b><span class="sub">art. 23 · publicidade das hipóteses de tratamento</span></td><td><b style="color:var(--bad)">vencido há 8 dias</b></td><td>obrigação legal do Poder Público em aberto</td><td><span class="chip chip-bad">Decidir</span></td></tr>
          <tr class="risk"><td><b>Autorizar a coleta de consentimento de imagem</b><span class="sub">1.180 responsáveis · art. 14, §1º</span></td><td>3 dias</td><td>as fotos das turmas seguem sem base legal</td><td><span class="chip chip-bad">Decidir</span></td></tr>
          <tr><td><b>Aprovar o plano de ação do incidente INC-0007</b><span class="sub">MFA na exportação e revogação na exoneração</span></td><td>5 dias</td><td>o incidente não pode ser encerrado formalmente</td><td><span class="chip chip-ok">Aprovar</span></td></tr>
          <tr><td><b>Aprovar o relatório de impacto do CadÚnico</b><span class="sub">dado sensível e população vulnerável</span></td><td>12 dias</td><td>a integração com o estado fica parada</td><td><span class="chip chip-neutral">Ver</span></td></tr>
          <tr><td><b>Designar o responsável pelo e-SIC em decreto</b><span class="sub">hoje o encaminhamento é informal</span></td><td>20 dias</td><td>chamados de LAI sem dono formal</td><td><span class="chip chip-neutral">Ver</span></td></tr>
          <tr><td><b>Aprovar o plano de treinamento dos 3.140 servidores</b><span class="sub">cobertura hoje: 61%</span></td><td>15 dias</td><td>o índice de conformidade não sobe de 63</td><td><span class="chip chip-ok">Aprovar</span></td></tr>
        </tbody></table></div>
      </div>
      <div class="grid g2" style="margin-top:11px">
        <div class="card2">
          <h4>Acessos da Zelo à sua conta <span class="hint">você aprova, você revoga</span></h4>
          <div class="tblwrap"><table class="tbl"><thead><tr>
            <th>Quando</th><th>Quem</th><th>Duração</th><th>Situação</th></tr></thead><tbody>
            <tr><td class="mono">31/08 14:41</td><td>Marina Aguiar<span class="sub">apuração do protocolo DT-0406</span></td><td>3 horas</td><td><span class="chip chip-ok">Você aprovou às 14:39</span></td></tr>
            <tr><td class="mono">29/08 09:12</td><td>Rafa Torres<span class="sub">configuração do canal</span></td><td>30 min</td><td><span class="chip chip-ok">Aprovado pelo Gabinete</span></td></tr>
            <tr><td class="mono">22/08 16:40</td><td>Marina Aguiar<span class="sub">apuração de incidente</span></td><td>3 horas</td><td><span class="chip chip-neutral">Expirado</span></td></tr>
            <tr class="risk"><td class="mono">14/08 11:05</td><td>Bruno Sales<span class="sub">sem finalidade declarada</span></td><td>—</td><td><span class="chip chip-bad">Você negou</span></td></tr>
          </tbody></table></div>
          <p style="font-size:11px; color:var(--ink-faint); margin-top:7px">
            Ninguém do escritório entra na conta sem passar por aqui. Duração de 30 minutos a 15 dias, a
            solicitação caduca em 5 minutos sem resposta, você revoga a qualquer momento — e o log pode ser
            apresentado à ANPD, à Controladoria ou ao próprio cidadão.
          </p>
        </div>
        <div class="card2">
          <h4>Seus cidadãos no mês</h4>
          <div class="frow"><span class="fl">Pedidos recebidos</span><span class="fbar"><i style="width:100%"></i></span><span class="fv" id="pRec">—</span></div>
          <div class="frow"><span class="fl">Respondidos dentro do prazo</span><span class="fbar"><i class="ok" style="width:96%"></i></span><span class="fv" id="pOk">—</span></div>
          <div class="frow"><span class="fl">Em andamento</span><span class="fbar"><i class="warn" style="width:20%"></i></span><span class="fv" id="pAnd">—</span></div>
          <div class="frow"><span class="fl">Recusados com fundamento</span><span class="fbar"><i class="bad" style="width:9%"></i></span><span class="fv" id="pRec2">—</span></div>
          <p style="font-size:11px; color:var(--ink-faint); margin-top:8px">
            Você vê o status e o prazo de cada pedido. O <b>conteúdo</b> da conversa com o cidadão fica na conta
            de atendimento do município — este portal é a camada de governança, não uma segunda caixa de entrada.
          </p>
        </div>
      </div>
      <div class="card2" style="margin-top:11px">
        <h4>O que este portal não mostra <span class="hint">e por que isso é bom para você</span></h4>
        <ul class="rules">
          <li class="no"><span class="mk">✕</span><span><b>A operação interna do escritório</b> — filas, custos e produtividade da equipe da Zelo.</span></li>
          <li class="no"><span class="mk">✕</span><span><b>O conteúdo das conversas dos seus cidadãos</b>, que vive na conta de atendimento e não é duplicado aqui.</span></li>
          <li><span class="mk">✓</span><span><b>Aprovar ou negar o acesso do escritório</b> à sua conta, com prazo, e revogar na hora.</span></li>
          <li><span class="mk">✓</span><span><b>Exportar a evidência</b> de qualquer protocolo, para auditoria, para a ANPD ou para o próprio cidadão.</span></li>
          <li><span class="mk">✓</span><span><b>Decidir o que a lei reserva ao controlador</b> — é a fila lá em cima.</span></li>
        </ul>
        <p class="rule">
          <b>Quem responde legalmente pelo município é o município.</b> O Encarregado orienta, registra, cobra
          prazo e põe a cara na conversa com o cidadão — mas a responsabilidade do controlador não se
          terceiriza. Por isso a fila de decisões existe: é exatamente a parte que não dá para delegar.
        </p>
      </div>`
    }
  ]
};

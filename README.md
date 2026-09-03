# ArtONE Privacidade — simulador de plataforma de LGPD

Simulador de demonstração de uma **plataforma de privacidade e LGPD** (na categoria de OneTrust
e TrustWorks) embarcada no ArtONE. A gestão da LGPD acontece na plataforma; quando algo precisa
falar com gente, a execução vai para o ArtONE — atendimento, campanha ou grupo de WhatsApp.
A conversa apoia a base; não é a base.

Uma única organização de demonstração: **Prefeitura de Santa Rita do Vale** (128.000 habitantes),
que contratou a **Zelo Privacidade** como Encarregado (DPO como serviço). Nenhum dado é real —
nomes, protocolos, hashes e números são fictícios.

Zero build, zero backend, zero fetch: abre por duplo clique no `index.html` ou em qualquer
hospedagem estática.

## Dois ambientes, separados pela barra do ArtONE

| Barra | Ambiente | O que tem |
|---|---|---|
| **Apps** | Plataforma de privacidade | os dez módulos de gestão — registro, prazo, risco e prova |
| **Atendimentos** | ArtONE | inbox do canal do Encarregado, campanhas e o celular com a conversa |

No ambiente de gestão o celular não aparece: no lugar dele, um aviso de que a conversa acontece
no ArtONE. Cada objeto criado na plataforma — campanha de formulário, relâmpago de treinamento,
comunicação de incidente — aparece no ArtONE com a coluna "veio de" apontando a origem.

## Módulos

Mapa de dados · Solicitações de titulares · Formulários e campanhas · Consentimento · Avaliações ·
Gestão de riscos · Gestão de terceiros · Incidentes · Treinamento · Conformidade e evidências.

Todo módulo tem **ação** (novo formulário, nova finalidade, registrar incidente…), a **linha entre
o que o agente resolve sozinho e o que escala para humano**, e **procedência** em cada registro —
quem pediu, quando, por quê, quem responde.

O interruptor **Ver como: Encarregado | Controlador** mostra o portal do cliente contratante,
com escopo travado na conta dele e a fila de decisões que só o controlador pode tomar.

## Regras que o simulador defende

- **A plataforma não acessa os sistemas do município.** Para apurar, ela pergunta a quem responde
  por cada base e consolida. A tela mostra o que poderia ser conectado — o manual é o piso, não o teto.
- **A plataforma não detecta nada sozinha.** Incidente e acesso indevido entram por registro de quem
  identificou. A gestão de acessos é **recertificação**: a plataforma pergunta a cada chefia e a cada
  fornecedor se a pessoa ainda está ativa e se a credencial foi eliminada.
- **Consentimento nunca é a base para iniciar o contato.** Ele é colhido dentro de um contato que já
  tinha outra base — e no município quase todo contato tem: política pública, obrigação legal, tutela
  da saúde.
- **Verificar identidade é proporcional ao risco.** O protocolo abre sem documento; a verificação vem
  na entrega. Não se exige dado novo só para verificar.
- **Formulário extenso é onde o programa morre.** RIPD e due diligence vêm pré-preenchidos pelo
  inventário; o que sobra vai em conversa, e quem não responde vira lacuna registrada, não "ok".
- **Pedido que não é LGPD sai do caminho.** LAI vira protocolo no setor responsável, e a resposta
  volta pelo canal do e-SIC — não pelo canal do Encarregado.

## Cenários

| id | Cenário |
|---|---|
| `titular` | Direito do cidadão — o dado em cinco secretarias que não se falam |
| `consentimento` | "Quem autorizou vocês a me mandarem mensagem?" |
| `incidente` | Vazamento do CadÚnico, das 2h14 às 12.400 famílias comunicadas |
| `inventario` | Entrevista com a Secretaria de Educação descobre o grupo de WhatsApp das creches |
| `treinamento` | Turmas de servidores e atualização relâmpago disparada pelo incidente |
| `judicializacao` | O município é citado, e a defesa sai da trilha de evidências |

URL direta: `index.html?cenario=<id>`.

## Estrutura

```
index.html        carrega dados + cenários + motor
assets/priv.css   estilos
assets/priv.js    motor: ambientes, módulos, ações, modal, API dos passos
dados.js          workspace da Prefeitura: módulos, ações e modelos
cenarios.js       os seis roteiros
```

Fidelidade ao ArtONE real: inbox Novos/Meus/Outros, tag preta, protocolo, eventos de habilidade
do agente com modal de Detalhes, painéis do CRM com histórico "Alterado por API", Grupos do
WhatsApp com moderador e cor por remetente.

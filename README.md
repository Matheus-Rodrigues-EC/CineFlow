# 🎬 CineFlow

Plataforma web fullstack para gerenciamento e reserva de ingressos de cinema.

O **CineFlow** foi concebido para ser uma solução moderna, escalável e preparada para evolução futura, atendendo desde cinemas independentes até possíveis cenários de operação multiunidade e modelo SaaS.

A primeira versão será desenvolvida seguindo a abordagem **Mobile First**, permitindo expansão posterior para Desktop, PWA e arquiteturas distribuídas.

---

# Visão Geral

O sistema é dividido em dois ambientes principais:

### Cliente

Responsável pela experiência do usuário final, permitindo consulta dos filmes, reserva de assentos, pagamento e acompanhamento do histórico.

### Administrativo

Responsável pela operação do cinema, incluindo gestão de filmes, sessões, funcionários, vendas e relatórios.

---

# Arquitetura da Solução

```text
                 ┌─────────────────────┐
                 │     React + Vite    │
                 │      Frontend       │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │       NestJS        │
                 │       Backend       │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │     PostgreSQL      │
                 │      Database       │
                 └─────────────────────┘
```

Arquitetura preparada para possíveis futuras integrações com:

* Redis
* RabbitMQ
* WebSocket
* MinIO
* AWS S3
* Mercado Pago
* Stripe

---

# Tecnologias

## Frontend

* React
* Vite
* TypeScript
* Ant Design
* Styled Components
* TanStack Query
* React Hook Form
* Zod
* Axios
* Zustand

## Backend

* NestJS
* Prisma ORM
* PostgreSQL
* JWT
* Bcrypt
* Class Validator
* Swagger

## DevOps

* Docker
* Docker Compose

---

# Funcionalidades

## Área do Cliente

### Catálogo de Filmes

* Filmes em cartaz;
* Próximos lançamentos;
* Filmes populares;
* Pesquisa por nome e gênero.

### Detalhes do Filme

* Sinopse;
* Duração;
* Classificação indicativa;
* Elenco;
* Horários disponíveis;
* Formatos de exibição.

### Reserva de Assentos

* Escolha da sessão;
* Seleção dos assentos;
* Confirmação da reserva.

### Pagamento

Suporte para:

* PIX;
* Cartão de crédito;
* Cartão de débito.

### Histórico

* Filmes assistidos;
* Reservas anteriores;
* Consulta dos ingressos.

### Perfil

* Atualização dos dados pessoais;
* Alteração de senha;
* Configurações da conta.

---

## Área Administrativa

### Dashboard

Indicadores operacionais:

* Receita diária;
* Quantidade de ingressos vendidos;
* Filmes mais assistidos;
* Usuários cadastrados;
* Taxa de ocupação das salas.

### Gestão de Filmes

* Cadastro;
* Edição;
* Exclusão;
* Controle de disponibilidade.

### Gestão de Sessões

* Programação de horários;
* Definição das salas;
* Controle de preços.

### Gestão de Salas

* Capacidade;
* Tipo da sala;
* Organização dos assentos.

### Gestão de Funcionários

* Cadastro;
* Edição;
* Permissões;
* Controle de acessos.

### Gestão de Reservas

* Histórico de vendas;
* Cancelamentos;
* Status dos pagamentos.

### Relatórios

* Receita mensal;
* Filmes mais populares;
* Taxa de ocupação;
* Histórico operacional.

---

# Perfis de Usuário

| Perfil   | Descrição                |
| -------- | ------------------------ |
| CUSTOMER | Cliente final            |
| EMPLOYEE | Funcionário              |
| ADMIN    | Administrador do sistema |

---

# Estrutura dos Repositórios

```text
cineflow
│
├── cineflow-frontend
│
├── cineflow-backend
│
├── cineflow-orchestrator
│     docker-compose.yml
│
└── docs
```

---

# Arquitetura Frontend

Organização baseada em Feature First.

```text
src
│
├── app
├── shared
├── modules
│
├── modules
│   ├── auth
│   ├── catalog
│   ├── movie
│   ├── reservation
│   ├── payment
│   ├── profile
│   ├── history
│   ├── dashboard
│   ├── employees
│   └── films
│
└── main.tsx
```

---

# Arquitetura Backend

```text
src
│
├── common
├── config
├── prisma
│
├── modules
│   ├── auth
│   ├── users
│   ├── employees
│   ├── movies
│   ├── sessions
│   ├── rooms
│   ├── seats
│   ├── reservations
│   ├── payments
│   ├── dashboard
│   └── history
│
└── main.ts
```

---

# Roadmap

## MVP

* [ ] Autenticação
* [ ] Catálogo de filmes
* [ ] Sessões
* [ ] Seleção de assentos
* [ ] Pagamento
* [ ] Histórico do cliente
* [ ] Dashboard administrativo
* [ ] Gestão de funcionários

## Versão 1.0

* [ ] QR Code do ingresso
* [ ] Recuperação de senha
* [ ] Upload de imagens
* [ ] Relatórios avançados

## Versão 2.0

* [ ] Atualização em tempo real via WebSocket
* [ ] Notificações por e-mail
* [ ] Sistema de favoritos
* [ ] Progressive Web App (PWA)

## Versão 3.0

* [ ] Redis
* [ ] RabbitMQ
* [ ] Cache distribuído
* [ ] Integração com Stripe
* [ ] Arquitetura de microsserviços
* [ ] Multi-tenant

---

# Visão de Longo Prazo

O CineFlow foi planejado para evoluir para uma plataforma de gestão e venda de ingressos de cinema, permitindo:

* Operação de múltiplos cinemas;
* Controle centralizado;
* Escalabilidade horizontal;
* Integração com serviços externos;
* Personalização por cliente;
* Possibilidade de modelo SaaS.

---

# Status do Projeto

> 🚧 Em desenvolvimento.
>
> Projeto em fase inicial de construção, com foco na primeira versão Mobile First.

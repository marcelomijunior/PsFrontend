export enum STATUS_AGENDAMENTO {
  ABERTO = 0,
  CONFIRMADO = 1,
  ENCERRADO = 2,
  CANCELADO = 3,
}

export type AGENDAMENTO = {
  id: number;
  img?: string;
  horario: string;
  data: string;
  nome: string;
  servico: string;
  endereco: string;
  telefone?: string;
  raca?: string;
  status: STATUS_AGENDAMENTO;
};

export const AGENDAMENTOS: AGENDAMENTO[] = [
  {
    id: 0,
    img: 'assets/imgs/dog-profile.jpg',
    data: '23/11/2020',
    horario: '14:00',
    nome: 'Rex',
    raca: 'Labrador',
    servico: 'Banho e Tosa',
    endereco: 'Avenida Djalma Vieira Cristo, 789 - Vale do Jatobá',
    telefone: '(31) 99988-7744',
    status: STATUS_AGENDAMENTO.ENCERRADO,
  },
  {
    id: 1,
    img: 'assets/imgs/dog-profile.jpg',
    data: '23/11/2020',
    horario: '16:00',
    nome: 'Rex',
    raca: 'Labrador',
    servico: 'Banho e Tosa',
    endereco: 'Avenida Djalma Vieira Cristo, 789 - Vale do Jatobá',
    telefone: '(31) 99988-7744',
    status: STATUS_AGENDAMENTO.ENCERRADO,
  },
];

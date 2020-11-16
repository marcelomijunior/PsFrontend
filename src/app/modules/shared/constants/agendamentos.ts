export type AGENDAMENTO = typeof AGENDAMENTOS[0] & {
  img?: string;
  raca?: string;
  telefone?: string;
};

export const AGENDAMENTOS = [
  {
    id: 0,
    img: 'assets/imgs/dog-profile.jpg',
    horario: '15:00',
    nome: 'Rex',
    raca: 'Labrador',
    servico: 'Banho e Tosa',
    endereco: 'Avenida Djalma Vieira Cristo, 789 - Vale do Jatobá',
    telefone: '(31) 99988-7744',
  },
  {
    id: 1,
    img: 'assets/imgs/dog-profile.jpg',
    horario: '15:00',
    nome: 'Rex',
    raca: 'Labrador',
    servico: 'Banho e Tosa',
    endereco: 'Avenida Djalma Vieira Cristo, 789 - Vale do Jatobá',
    telefone: '(31) 99988-7744',
  },
];

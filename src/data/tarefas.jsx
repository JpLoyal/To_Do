import { v4 as uuidv4 } from 'uuid';

const tarefas = [
    {
        id: uuidv4(),
        descricao: "Escovar os Dentes",
        data: "2024-05-10",
        horario: "10:00",
        status: "pendente"
    },
    {
        id: uuidv4(),
        descricao: "Tomar Café",
        data: "2024-05-11",
        horario: "14:00",
        status: "pendente"
    },
    {
        id: uuidv4(),
        descricao: "Passar Creme",
        data: "2024-05-11",
        horario: "14:00",
        status: "pendente"
    },
    {
        id: uuidv4(),
        descricao: "Ler Livro",
        data: "2024-05-13",
        horario: "17:00",
        status: "pendente"
    },
    {
        id: uuidv4(),
        descricao: "Responder e-mails",
        data: "2024-05-14",
        horario: "11:30",
        status: "pendente"
    },
    {
        id: uuidv4(),
        descricao: "Fazer Compras",
        data: "2024-05-15",
        horario: "15:00",
        status: "concluida"
    },
    {
        id: uuidv4(),
        descricao: "Preparar Almoço",
        data: "2024-05-16",
        horario: "12:00",
        status: "concluida"
    },
    {
        id: uuidv4(),
        descricao: "Assistir Filme",
        data: "2024-05-17",
        horario: "20:00",
        status: "concluida"
    },
    {
        id: uuidv4(),
        descricao: "Estudar Programação",
        data: "2024-05-18",
        horario: "09:00",
        status: "concluida"
    },
    {
        id: uuidv4(),
        descricao: "Fazer Exercícios",
        data: "2024-05-12",
        horario: "08:30",
        status: "pendente"
    },
  ];

  export default tarefas;
  
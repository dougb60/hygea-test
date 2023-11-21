export const formatDate = (birthDate: string | Date) => {
  const toDate = new Date(birthDate);

  const formatted = toDate.toLocaleDateString("pt-BR");

  return formatted;
};

export const calculateAge = (birthDate: string | Date) => {
  const year = new Date(birthDate).getFullYear();
  const actualYear = new Date().getFullYear();

  return actualYear - year;
};

export const formatStringToDate = (date: string) => {
  const [dia, mes, ano] = date.split("/");
  const formatted = new Date(`${ano}-${mes}-${dia}T00:00:00`);

  return formatted;
};

export const formatAddress = (address: {
  street: string;
  number: string;
  details?: string;
}) => {
  return `${address.street}, ${address.number} - complemento: ${
    address.details ?? ""
  }`;
};

export const formatDate = (birthDate: string) => {
  const toDate = new Date(birthDate);

  const formatted = toDate.toLocaleDateString("pt-BR");

  return formatted;
};

export const calculateAge = (birthDate: string) => {
  const year = new Date(birthDate).getFullYear();
  const actualYear = new Date().getFullYear();

  return actualYear - year;
};

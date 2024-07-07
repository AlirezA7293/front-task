export const addCostumer = (formData: FormData) => {
  const firstName = formData.get("costumerFirstName");
  const lastName = formData.get("costumerLastName");
  const email = formData.get("costumerEmail");
  const bankAccount = formData.get("costumerBANumber");
  const lastCostumerId = localStorage.length;
  const currentCostumerId = (lastCostumerId + 1).toString();
  const id = currentCostumerId;
  localStorage.setItem(
    currentCostumerId,
    JSON.stringify({ id, firstName, lastName, email, bankAccount })
  );
};


export const updateCostumer = (formData: FormData) => {
  const id = formData.get("costumerId");
  const firstName = formData.get("costumerFirstName");
  const lastName = formData.get("costumerLastName");
  const email = formData.get("costumerEmail");
  const bankAccount = formData.get("costumerBANumber");
  if (id) {
    localStorage.removeItem(id.toString());
    localStorage.setItem(
      id.toString(),
      JSON.stringify({ id, firstName, lastName, email, bankAccount })
    )
  }
}


export const deleteCostumer = (id: string) => {
  localStorage.removeItem(id);
};
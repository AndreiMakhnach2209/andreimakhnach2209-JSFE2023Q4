function dataRecesive(form: HTMLFormElement) {
  const formData = new FormData(form);
  const data: Record<string, FormDataEntryValue> = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data);
  return data;
}

export default function saveToLocalStorage(form: HTMLFormElement) {
  const data = dataRecesive(form);
  Object.entries(data).forEach((item) => {
    const [key, value] = item;
    localStorage.setItem(key, value.toString());
  });
}

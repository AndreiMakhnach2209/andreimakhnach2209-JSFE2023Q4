export default function dataRecesive(form: HTMLFormElement) {
  const formData = new FormData(form);
  const data: Record<string, string> = {};
  formData.forEach((value, key) => {
    data[key] = value as string;
  });
  return data;
}

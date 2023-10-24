export const formateDate = (date) => {
  const hours = new Date(date).getHours();
  const minit = new Date(date).getMinutes();
  return `${hours < 10 ? "0" + hours : hours}:${
    minit < 10 ? "0" + minit : minit
  }`;
};



export const downloadMedia = async (e, originalImage) => {
  e.preventDefault();
  try {
      fetch(originalImage)
      .then(resp => resp.blob())
      .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;

          const nameSplit = originalImage.split("/");
          const duplicateName = nameSplit.pop();

          // the filename you want
          a.download = "" + duplicateName + "";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.log('Error while downloading the image ', error))

  } catch (error) {
      console.log('Error while downloading the image ', error);
  }
}

//Projede kullanılan action  types bileşen içerisinde string şeklinde tanımlandığında, yanlış yazılsa bile return default modunun çalışmasından dolayı console da ve codda herhangi bir hata gelmiyor ve hatanın kaynağının tespit edilmesi zorlaşıyor.Bunun  önüne geçebilmek için :

const ActionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
};

export default ActionTypes;

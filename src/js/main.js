

firstTask.onclick = function() {
  const firstRow = prompt('Введите первую строку:');
  const secontRow = prompt('Введите вторую строку:');

  function getRow(firstRow, secontRow) {
    let firstRowCountA = null;
    let secontRowCountA = null;

    for (i = 0; i < firstRow.length; i++) {
      if (firstRow.charAt(i) === 'а' || firstRow.charAt(i) === 'А') {
        firstRowCountA++;
      }
    }

    for (i = 0; i < secontRow.length; i++) {
      if (secontRow.charAt(i) === 'а' || secontRow.charAt(i) === 'А') {
        secontRowCountA++;
      }
    }
    return(firstRowCountA > secontRowCountA ? firstRow : secontRow);
  }

  alert(getRow(firstRow, secontRow));
};

secondTask.onclick = function() {
  const telNumber = prompt('Введите 12-ти символьный номер телефона в формате +7xxxxxxxxxx:');

  function formattedPhone(phoneNumber) {

    let formattedPhoneNumber = '';

    if (phoneNumber.length != 12) {
      return 'Указанный номер содержит больше или меньше 12-ти символов!'
    }

    if (!Number(phoneNumber)) {
      return 'Указанный номер содержит значения отличные от чисел!'
    }

    if (phoneNumber.charAt(0) != '+') {
      return 'Номер должен начинаться с знака +8!'
    }

      for (i = 0; i < phoneNumber.length; i++) {

        if (i == 2) {
          formattedPhoneNumber += ` (${phoneNumber.charAt(i)}`;
          continue
        }

        if (i == 4) {
          formattedPhoneNumber += `${phoneNumber.charAt(i)}) `;
          continue
        }

        if (i == 7 || i == 9) {
          formattedPhoneNumber += `${phoneNumber.charAt(i)}-`;
          continue
        }
        formattedPhoneNumber += phoneNumber.charAt(i);
      }

    return formattedPhoneNumber;
  }

  alert(formattedPhone(telNumber));
};
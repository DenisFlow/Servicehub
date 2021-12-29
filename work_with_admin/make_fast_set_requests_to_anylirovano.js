/* 
need make link to admin area of requests: 
https://itcredit.io/admin/bidders/requests/1751
and set regex pattern to https://itcredit.io/admin/bidders/requests/
open program @MakeChangeInListCRM.exe, copy links and push ("!^+{NUMPADDIV}) and all links move to
file of program

*/

try {
  if (
    document.getElementsByTagName("h1")[1].innerText == "Изменить Заявка" &&
    document.getElementById("id_status").value != "212"
  ) {
    if (
      document.getElementById("id_notification_publication_datetime_0").value ==
        "" &&
      document.getElementById("id_notification_publication_datetime_1").value ==
        ""
    ) {
      document.getElementById("id_notification_publication_datetime_0").value =
        "22.07.2021";
      document.getElementById("id_notification_publication_datetime_1").value =
        "16:33:03";
    }
    // set data to anulirovano
    document.getElementById("id_status").value = "212";
    document.getElementsByName("_continue")[0].click();
  }
} catch (error) {}

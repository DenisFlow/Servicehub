var all = document.querySelectorAll("a");
var text = "";

for (let index = 0; index < all.length; index++) {
  const element = all[index];
  if (element.id.match("gridBodyTable_primaryField")) {
    // text += element.id + "\n";
    console.log(element.id);
  }
}
// copy address
// (?<=\{).+(?=\})
// console.js:167 gridBodyTable_primaryField_{2B49D320-1EF5-EB11-AB41-005056834625}_25
// 2B49D320-1EF5-EB11-AB41-005056834625
// add to
/*
https://crm.k2b.io/dcrm/main.aspx?pagetype=entityrecord&etn=pg_process_template&id={

}

where pg_process_template find
frames[0].Xrm.Page.data.entity.getEntityName();
id get like this frames[0].Xrm.Page.data.entity.getId();
*/

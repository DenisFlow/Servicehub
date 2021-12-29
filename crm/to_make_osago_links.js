var endTask = false;
var i = 0;
var data = [];
while (!endTask && i < 1000) {
  var part = frames[i].Xrm.Page.data;
  if (part !== null) {
    let id = part.entity.getId().replace(/[\{\}]/g, "");
    data.push(`https://osago.goodfin.ru:6442/Main/Result?calc_id=${id}`);
    data.push(`https://osago.goodfin.ru:6442/Main/Edit?insur_id=${id}`);
    console.log(part);
    break;
  }
  i++;
}
console.log(data);

// ===========================================================
// "dev_insurance_policy"
/*
https://crm.k2b.io/dcrm/main.aspx?pagetype=entityrecord&etn=systemuser&id={19cc2af3-895c-e911-ab51-0050569cbd4b}
*/

/* OSAGO

B2F50BBB-5E14-EC11-AE61-0050569CBD4B

https://osago.goodfin.ru:6442/Main/Edit?insur_id=adebad24-0a08-ec11-ae41-0050569cbd4b
https://osago.goodfin.ru:6442/Main/Edit?insur_id=B2F50BBB-5E14-EC11-AE61-0050569CBD4B
https://osago.goodfin.ru:6442/Main/Result?calc_id=B2F50BBB-5E14-EC11-AE61-0050569CBD4B
https://osago.goodfin.ru:6442/Main/Edit?insur_id=3ABA79C2-3C27-EC11-AEA1-00505683924E
https://osago.goodfin.ru:6442/Main/Result?calc_id=3ABA79C2-3C27-EC11-AEA1-00505683924E
https://osago.goodfin.ru:6442/Main/Result?calc_id=3ABA79C2-3C27-EC11-AEA1-00505683924E
https://osago.goodfin.ru:6442/Main/Result?calc_id=3aba79c2-3c27-ec11-aea1-00505683924e
https://osago.goodfin.ru:6442/Main/Result?calc_id=b6490ab5-5027-ec11-aea1-00505683924e
https://osago.goodfin.ru:6442/Main/Result?calc_id=d2f53946-5827-ec11-aea1-00505683924e

https://osago.goodfin.ru:6442/Main/Edit?insur_id=0C6A8971-4227-EC11-AEA1-00505683924E
https://osago.goodfin.ru:6442/Main/Result?calc_id=0C6A8971-4227-EC11-AEA1-00505683924E
 */

// for (let index = 0; index < 100; index++) {
//   if (frames[index].Xrm.Page.data !== null) {
//     console.log(index);
//   }
// }

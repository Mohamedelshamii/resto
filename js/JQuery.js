$(document).ready(function () {
  // إظهار جميع البطاقات عند التحميل
  $(".card-style").slideDown();

  // عند الضغط على أحد الأزرار في القائمة
  $(".filters_menu li").click(function () {
    // إزالة الفئة active من جميع الأزرار
    $(".filters_menu li").removeClass("active_menu");
    // إضافة الفئة active إلى الزر الذي تم الضغط عليه
    $(this).addClass("active_menu");

    // جلب قيمة الفلترة من الزر
    var filterValue = $(this).attr("data-filter");

    // إظهار أو إخفاء البطاقات بناءً على الفئة المختارة
    if (filterValue == "*") {
      $(".card-style").slideDown(); // إظهار جميع البطاقات بتأثير انزلاق
    } else {
      $(".card-style").slideUp(400, function() { // إخفاء جميع البطاقات بتأثير انزلاق
        $(filterValue).slideDown(); // إظهار البطاقات التي تنتمي إلى الفئة المختارة بتأثير انزلاق
      });
    }
  });
});

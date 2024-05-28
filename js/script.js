// bar chart 
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('barChart').getContext('2d');
    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Prod 1', 'Prod 2', 'Prod 3', 'Prod 4', 'Prod 5', 'Prod 6'],
            datasets: [{
                label: 'product left',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Low Stock Items',
                    font: {
                        size: 20
                    }
                }
            }
            
        }
        
    });
    // kehalaman add trans
    ctx.canvas.addEventListener('click', function(event) {
        window.location.href = 'addTrans.html';
    });
});

// line chart
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('revenueChart').getContext('2d');
    var revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [1000, 1500, 1200, 1800, 2000, 1700],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4, 
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Revenue',
                    font: {
                        size: 20
                    }
                }
            }
        }
    });
});

// doughnut chart
document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('unitsSoldChart').getContext('2d');
    var unitsSoldData = {
        labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'], 
        datasets: [{
            data: [300, 50, 100, 150,20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var unitsSoldChart = new Chart(ctx, {
        type: 'doughnut',
        data: unitsSoldData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                        display: true,
                        text: 'Unit Sold',
                        font: {
                            size: 20
                        }
                    }
            
            }
        }
    });
    // kehalaman stock
    ctx.canvas.addEventListener('click', function(event) {
        window.location.href = 'stock.html';
    });
});

//detail modal
$(document).ready(function() {
    $('#detailModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget); 
        // Ambil Data
        var itemId = button.data('id');
        var itemName = button.data('name');
        var itemStock = button.data('stock');
        var subtotal = button.data('subtotal');
        var supplier = button.data('supplier');
        var deskripsi = button.data('deskripsi');
        var date = button.data('date');
        var modal = $(this);
        // tunjukin data
        modal.find('#itemId').val(itemId);
        modal.find('#itemName').val(itemName);
        modal.find('#itemStock').val(itemStock);
        modal.find('#subtotal').val(subtotal);
        modal.find('#supplier').val(supplier);
        modal.find('#deskripsi').val(deskripsi);
        modal.find('#date').val(date);
    });
});

//delete modal
$(document).ready(function() {
    $('.delete-button').click(function() {
        var row = $(this).closest('tr');
    
        $('#deleteConfirmationModal').modal('show');
        $('#confirmDeleteButton').click(function() {
            row.remove();
            $('#deleteConfirmationModal').modal('hide');
        });
    });
});

//edit modal
$(document).ready(function() {
    $('.edit-button').on('click', function() {
        var row = $(this).closest('tr');
        var id = row.find('td').eq(0).text();
        var name = row.find('td').eq(1).text();
        var deskripsi = row.find('td').eq(2).text();

        $('#editProductId').val(id);
        $('#editProductName').val(name);
        $('#editProductSDeskripsi').val(deskripsi);
    });

    $('#editProductForm').on('submit', function(event) {
        event.preventDefault();

        var id = $('#editProductId').val();
        var name = $('#editProductName').val();
        var deskripsi = $('#editProductDeskripsi').val();

        // Cari ID
        var row = $('table').find('td').filter(function() {
            return $(this).text() === id;
        }).closest('tr');

        row.find('td').eq(1).text(name);
        row.find('td').eq(2).text(deskripsi);

        $('#editModal').modal('hide');
    });
});

// pagination
$(document).ready(function() {
    function setupPagination($tableRows, $numbering) {
        var rowsPerPage = 10;
        var totalRows = $tableRows.length;
        var totalPages = Math.ceil(totalRows / rowsPerPage);
        var currentPage = 1;

        function generatePaginationLinks() {
            $numbering.empty();

            var $prevLink = $('<li class="page-item prev prev-next"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>');
            $numbering.append($prevLink);

            for (var i = 1; i <= totalPages; i++) {
                var $pageLink = $('<li class="page-item"><a class="page-link" href="#">' + i + '</a></li>');
                $numbering.append($pageLink);
            }

            var $nextLink = $('<li class="page-item next prev-next"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>');
            $numbering.append($nextLink);

            $('.page-link').click(function(event) {
                event.preventDefault();
                var pageText = $(this).text();
                if (pageText === '‹') { 
                    currentPage = Math.max(1, currentPage - 1);
                } else if (pageText === '›') {
                    currentPage = Math.min(totalPages, currentPage + 1);
                } else { 
                    currentPage = parseInt(pageText);
                }
                showPage(currentPage);
            });
            showPage(currentPage);
        }

        function showPage(pageNumber) {
            var startIndex = (pageNumber - 1) * rowsPerPage;
            var endIndex = startIndex + rowsPerPage;
            $tableRows.hide();
            $tableRows.slice(startIndex, endIndex).show();

            $('.page-link').parent().removeClass('active');
            $('.page-link').filter(function() {
                return $(this).text() === pageNumber.toString();
            }).parent().addClass('active');
        }

        generatePaginationLinks();
    }

    // pagination history-table
    var $historyTableRows = $('.history-table tbody tr');
    var $historyNumbering = $('.history-table .numbering');
    setupPagination($historyTableRows, $historyNumbering);

    // pagination stock-table
    var $stockTableRows = $('.stock-table tbody tr');
    var $stockNumbering = $('.stock-table .numbering');
    setupPagination($stockTableRows, $stockNumbering);
});

// ambil tanggal hari ini
document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var day = ("0" + today.getDate()).slice(-2);
    var month = ("0" + (today.getMonth() + 1)).slice(-2); // Months are zero-based
    var year = today.getFullYear();
    var formattedDate = `${month}/${day}/${year}`;

    var transactionDateInput = document.getElementById('transactionDate');
    transactionDateInput.placeholder = formattedDate;
});
// nambah product
function addProductEntry() {
    // Ambil data dari form
    var productName = $('.product-name').val();
    var productQuantity = $('.product-quantity').val();
    var productPrice = $('.product-price').val();
    var productDiscount = $('.product-discount').val();
    var total = productQuantity * productPrice * (1 - productDiscount / 100);

    // nambah row baru
    var newRowHtml = '<tr>' +
        '<td>' + productName + '</td>' +
        '<td>' + productQuantity + '</td>' +
        '<td>' + productPrice + '</td>' +
        '<td>' + productDiscount + '</td>' +
        '<td>' + total.toFixed(2) + '</td>' +
        '<td><button class="delete-button icon-button"><i class="bi bi-x-lg"></i></button></td>' +
        '</tr>';

    $('#productsTable').append(newRowHtml);
    // clear form
    $('.product-name').val('');
    $('.product-quantity').val('');
    $('.product-price').val('');
    $('.product-discount').val('');

    // cancel button
    $('#productsTable').on('click', '.delete-button', function () {
        $(this).closest('tr').remove();
    });
}

$(document).ready(function () {
    $('#transactionForm').submit(function (event) {
        event.preventDefault();

        // Ambil data dari form
        var transactionId = $('#transactionId').val();
        var transactionDate = $('#transactionDate').val();
        var supplierName = $('#supplierName').val();
        var productsData = [];

        // Looping
        $('.product-entry').each(function () {
            var productName = $(this).find('.product-name').val();
            var productQuantity = $(this).find('.product-quantity').eq(0).val();
            var productPrice = $(this).find('.product-price').val();
            var productDiscount = $(this).find('.product-discount').val();
            var total = parseFloat($(this).find('td').eq(4).text());

            productsData.push({
                productName: productName,
                productQuantity: productQuantity,
                productPrice: productPrice,
                productDiscount: productDiscount,
                total: total
            });
        });

        var formData = {
            transactionId: transactionId,
            transactionDate: transactionDate,
            supplierName: supplierName,
            productsData: JSON.stringify(productsData)
        };

        var queryString = $.param(formData);

        window.location.href = 'history.html' + queryString;
    });

    // cancel button
    $('#productsTable').on('click', '.delete-button', function () {
        $(this).closest('tr').remove();
    });
});

// sidebar
$(document).ready(function() {

    $('#sidebarToggleCollapse').click(function() {
        $('#sidebarCollapse').toggleClass('show');
    });

    function checkScreenWidth() {
        if ($(window).width() < 1000) { 
            $('#sidebarCollapse').removeClass('show');
        } else {
            $('#sidebarCollapse').addClass('show');
        }
    }

    checkScreenWidth();

    $(window).resize(function() {
        checkScreenWidth();
    });
});


// search stock table
$(document).ready(function() {
    $('.searchStockForm').submit(function(event) {
        event.preventDefault();

        var searchValue = $('#searchBarStock').val().trim().toLowerCase();

        filterTableBySearch(searchValue);
    });

    function filterTableBySearch(searchValue) {
        $('table tbody tr').each(function() {
            var rowData = $(this).text().trim().toLowerCase();
            if (rowData.includes(searchValue)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
});

// date range picker and search history transaction table
$(document).ready(function() {
    $('#dateRangePicker').daterangepicker({
        opens: 'left', 
        autoUpdateInput: false 
    });

    $('#dateRangePicker').on('apply.daterangepicker', function(ev, picker) {
        var startDate = picker.startDate.format('MM/DD/YYYY');
        var endDate = picker.endDate.format('MM/DD/YYYY');

        // Filter table date
        filterTable(startDate, endDate);
    });

    $('form').submit(function(event) {
        event.preventDefault(); 

        var searchValue = $(this).find('input[type="search"]').val().trim().toLowerCase();

        filterTableBySearch(searchValue);
    });

    // Filter table date range
    function filterTable(startDate, endDate) {
        $('table tbody tr').each(function() {
            var date = $(this).find('td:eq(2)').text().trim();

            if (moment(date, 'MM/DD/YYYY').isBetween(startDate, endDate, null, '[]')) {
                $(this).show(); 
            } else {
                $(this).hide();
            }
        });
    }

    // filter table search
    function filterTableBySearch(searchValue) {
        $('table tbody tr').each(function() {
            var rowData = $(this).text().trim().toLowerCase();
            if (rowData.includes(searchValue)) {
                $(this).show();
            } else {
                $(this).hide(); 
            }
        });
    }
});

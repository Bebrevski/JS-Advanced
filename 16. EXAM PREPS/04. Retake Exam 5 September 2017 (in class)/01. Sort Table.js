function sort(colIndex, descending) {
    let tableRows = $('tbody > tr');

    if (colIndex === 0){
        if (descending){
          tableRows.sort((a, b) => {
              a = $(a).find('td:nth-child(1)').text();
              b = $(b).find('td:nth-child(1)').text();

              return b.localeCompare(a);
          });
        } else {
            tableRows.sort((a, b) => {
                a = $(a).find('td:nth-child(1)').text();
                b = $(b).find('td:nth-child(1)').text();

                return a.localeCompare(b);
            });
        }
        $('tbody').append(tableRows);
    } else if (colIndex === 1){
        if (descending){
            tableRows.sort((a, b) => {
                a = $(a).find('td:nth-child(2)').text();
                b = $(b).find('td:nth-child(2)').text();

                return b - a;
            });
        } else {
            tableRows.sort((a, b) => {
                a = Number($(a).find('td:nth-child(2)').text());
                b = Number($(b).find('td:nth-child(2)').text());

                return a - b;
            });
        }
        $('tbody').append(tableRows);
    }
}
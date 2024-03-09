
type Options = { pageNo: string; pageSize: string };

const nonEmptyData = Array(25)
  .fill({
    contractReference: '111ILGL182630502',
    type: 'Avans',
    startDate: '2018-09-20 00:00:00',
    endDate: '2018-12-30 00:00:00',
    amount: 3899.51,
    currency: 'AZN'
  })
  .map((guarantee, index) => ({
    ...guarantee,
    contractReference: `${guarantee.contractReference}${index}`,
    collateralType: index % 2 === 0 ? 'B' : 'C'
  }));

export const mockTestList = (options: Options) => {
  return {
    status: 'OK',
    data: {
      pageCount: 5,
      pageSize: +(options.pageSize || 10),
      currentPage: +(options.pageNo || 1),
      itemsCount: 50,
      items: nonEmptyData
    }
  };
};

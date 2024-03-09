import express from 'express';

const router = express.Router();

const pledgesData = [
  {
    customerCIF: '1234567',
    fullname: 'Ismayil Hasanov Rashad',
    colletralCode: '99743',
    customerPledge: {
      describe: '12345',
      pledgesValue: 100.0,
      pledgedCurrency: 'AZN',
      startDate: new Date('2023-01-21'),
      endDate: new Date('2033-01-21')
    },
    data: [
      {
        productCode: 'CKLL',
        deposit: [
          {
            branch: '120',
            reference: '12345',
            currency: 'AZN'
          },
          {
            branch: '100',
            reference: '12346',
            currency: 'USD'
          }
        ],
        questions: [
          {
            key: 'propertyType',
            value: 'Daşınmaz əmlakın növü',
            type: 'select',
            items: [
              {
                key: 'private',
                value: 'Fərdi yaşayış evi'
              },
              {
                key: 'apartment',
                value: 'Mənzil'
              }
            ]
          },
          {
            key: 'owner',
            value: 'Mülkiyyətçi',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'propertyDetail',
            value: 'Əmlak - ümumi məlumat',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'buildingCompany',
            value: 'Tikinti şirkətinin adı',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'city',
            value: 'Şəhər',
            type: 'select',
            items: [
              {
                key: 'CityBaku',
                value: 'Baku'
              },
              {
                key: 'City',
                value: 'Sumqayit'
              }
            ]
          },
          {
            key: 'district',
            value: 'Rayon',
            type: 'select',
            items: [
              {
                key: 'mainDistrict',
                value: 'Qax'
              },
              {
                key: 'secondDistrict',
                value: 'Quba'
              }
            ]
          },
          {
            key: 'municipality',
            value: 'Bələdiyyə',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'town/village',
            value: 'Qəsəbə/Kənd',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'construction-project',
            value: 'Tikintinin layihəsi',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'land-designation',
            value: 'Torpaq təyinatı',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          }
        ]
      }
    ]
  },
  {
    customerCIF: '7654321',
    fullname: 'Ferid Hasanov Rashad',
    colletralCode: '99745',
    customerPledge: {
      describe: '12345',
      pledgesValue: 100.0,
      pledgedCurrency: 'AZN',
      startDate: new Date(),
      endDate: new Date()
    },
    data: [
      {
        productCode: 'CKLL',
        deposit: [],
        questions: [
          {
            key: 'familyStatus',
            value: 'Girov Qoyanın Ailə Vəziyyəti',
            type: 'select',
            items: [
              {
                key: 'married',
                value: 'Evli'
              },
              {
                key: 'single',
                value: 'Subay'
              }
            ]
          },
          {
            key: 'birthday',
            value: 'Girov qoyanın doğum tarixi',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'IdCode',
            value: 'Id kodu və ya VÖEN',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'FIN',
            value: 'Şəxsiyyət vəsiqəsinin fin kodu',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },

          {
            key: 'contractNumber',
            value: 'Girov qoyanın doğum tarixi',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'reference',
            value: 'Dep. AeS-də referensi',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'blockReference',
            value: 'Dep. AeS-də blok referensi',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'currentValue',
            value: 'Blokda olan cari hesab',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'amountValue',
            value: 'Girovun məbləği',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          },
          {
            key: 'liveStatus',
            value: 'Məhkəmə/Vəfat edib',
            type: 'text',
            items: [],
            maxLenght: 60,
            minLenght: 5
          }
        ]
      }
    ]
  }
];

const pledgeEditData = [
  {
    CIF: '1234567',
    pledgeList: [
      {
        code: '23434354524',
        desc: 'lorem ipsum dolor me requens vita mein',
        date: '22/12/2023'
      },
      {
        code: '234343545245',
        desc: 'lorem ipsum dolor me requens vita mein',
        date: '22/12/2023'
      },
      {
        code: '234343545246',
        desc: 'lorem ipsum dolor me requens vita mein',
        date: '22/12/2023'
      },
      {
        code: '234343545247',
        desc: 'lorem ipsum dolor me requens vita mein',
        date: '22/12/2023'
      },
      {
        code: '234343545248',
        desc: 'lorem ipsum dolor me requens vita mein',
        date: '22/12/2023'
      },
      {
        code: '234343545249',
        desc: 'lorem ipsum dolor me requens vita mein',
        date: '22/12/2023'
      }
    ]
  }
];
router.get('/', (req, res) => {
  res.json(pledgesData);
});

router.get('/edit/:CIF', (req, res) => {
  const CIF = req.params.CIF;
  const data = pledgeEditData.find((item) => item.CIF == CIF);

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'not found' });
  }
});

router.get('/:colletralCode', (req, res) => {
  const colletralCode = req.params.colletralCode;
  const pledge = pledgesData.find((p) => p.colletralCode === colletralCode);

  if (pledge) {
    res.json(pledge);
  } else {
    res.status(404).json({ error: 'user not found' });
  }
});

router.post('/', (req, res) => {
  const customerData = req.body;
  res.status(200).json({ message: 'Customer data received successfully', data: customerData });
});

router.put('/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedData = req.body;

  res.json({ id: itemId, ...updatedData });
});

export default router;

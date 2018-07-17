export const IMAGE_TYPE = {
    IMAGE_FOOD: 'raw',
    IMAGE_LABEL: 'label'
}
export const MEDICAL_CONDITION_PAGE = {
  DEFAULT: 'medication'
} 
export const medicationConditionResponse = [{
    "datefrom" : "2011-03-03T09:58:00.000-05:00",
    "dateto" : "2012-03-21T18:33:00.000-04:00",
    "dosage" : 0.5,
    "maxDosage" : 0.0,
    "refillsRemaining" : 0,
    "fsId" : 1608,
    "genericMedicineName" : "simvastatin (bulk) misc",
    "med" : "SIMVASTATIN (BULK) MISC",
    "medicinename" : "simvastatin (bulk) misc",
    "mode" : "Outpatient",
    "reasonForDiscontinue" : "",
    "route" : "Miscell. (Med.Supl.;Non-Drugs)",
    "rxNormCode" : "36567",
    "score" : 0.0,
    "source" : "MEDORDER",
    "status" : "",
    "strength" : "",
    "theraClass" : "UNCLASSIFIED DRUG PRODUCTS",
    "units" : "unit",
    "use" : "1/2 TAB IN THE EVENING",
    "ingredientRxNormCode" : "36567"
  }, {
    "datefrom" : "2013-03-06T10:12:00.000-05:00",
    "dateto" : "2013-03-25T13:09:00.000-04:00",
    "dosage" : 40.0,
    "maxDosage" : 0.0,
    "refillsRemaining" : 0,
    "fsId" : 1661,
    "genericMedicineName" : "furosemide",
    "med" : "FUROSEMIDE 20 MG TABLET",
    "medicinename" : "furosemide",
    "mode" : "",
    "reasonForDiscontinue" : "",
    "route" : "ORAL",
    "rxNormCode" : "4603",
    "score" : 0.0,
    "source" : "MEDORDER",
    "status" : "",
    "strength" : "20 mg",
    "theraClass" : "DIURETICS",
    "units" : "mg",
    "use" : "Take 20 mg by mouth twice daily.  ",
    "ingredientRxNormCode" : "4603"
  }];

  export const vitalsResponse = [{
    "encounterId" : "3778-1",
    "fsId" : 8215,
    "value" : "184/72",
    "vitals" : "BLOOD PRESSURE",
    "vitalsDate" : "2010-12-26T19:30:00.000-05:00"
  }, {
    "encounterId" : "3778-1",
    "fsId" : 8225,
    "value" : "74",
    "vitals" : "PULSE",
    "vitalsDate" : "2010-12-26T19:30:00.000-05:00"
  }, {
    "encounterId" : "3778-1",
    "fsId" : 8235,
    "value" : "96",
    "vitals" : "PULSE OXIMETRY",
    "vitalsDate" : "2010-12-26T19:30:00.000-05:00"
  }, {
    "encounterId" : "3778-1",
    "fsId" : 8245,
    "value" : "24",
    "vitals" : "RESPIRATION RATE",
    "vitalsDate" : "2010-12-26T19:30:00.000-05:00"
  }];
export const dataResponse = {
    "results": [
      {
        "data": [
          [
            1530403200000,
            40
          ],
          [
            1530489600000,
            46
          ],
          [
            1530576000000,
            65
          ],
          [
            1530662400000,
            43
          ],
          [
            1530748800000,
            77.7
          ],
          [
            1530835200000,
            11.4
          ],
          [
            1530921600000,
            34.66
          ],
          [
            1531008000000,
            22.4
          ],
          [
            1531094400000,
            75.1
          ],
          [
            1531180800000,
            54.7
          ]
        ],
        "legend": "Carbohydrates"
      },
      {
        "data": [
          [
            1530403200000,
            40
          ],
          [
            1530489600000,
            45
          ],
          [
            1530576000000,
            35
          ],
          [
            1530662400000,
            42
          ],
          [
            1530748800000,
            27.7
          ],
          [
            1530835200000,
            28.4
          ],
          [
            1530921600000,
            84.66
          ],
          [
            1531008000000,
            52.4
          ],
          [
            1531094400000,
            35.1
          ],
          [
            1531180800000,
            74.7
          ]
        ],
        "legend": "Proteins"
      },
      {
        "data": [
          [
            1530403200000,
            10
          ],
          [
            1530489600000,
            40
          ],
          [
            1530576000000,
            15
          ],
          [
            1530662400000,
            46
          ],
          [
            1530748800000,
            7.7
          ],
          [
            1530835200000,
            22.4
          ],
          [
            1530921600000,
            34.66
          ],
          [
            1531008000000,
            22.4
          ],
          [
            1531094400000,
            45.1
          ],
          [
            1531180800000,
            34.7
          ]
        ],
        "legend": "Fats"
      }
    ]
  };
export const dataJson = {
    results: [
        {
            data: [
                   [convertToMillisecs('2018-07-01'), 40],    [convertToMillisecs('2018-07-02'), 46], 
                   [convertToMillisecs('2018-07-03'), 65],    [convertToMillisecs('2018-07-04'), 43], 
                   [convertToMillisecs('2018-07-05'), 77.7],   [convertToMillisecs('2018-07-06'), 11.4], 
                   [convertToMillisecs('2018-07-07'), 34.66], [convertToMillisecs('2018-07-08'), 22.4], 
                   [convertToMillisecs('2018-07-09'), 75.1],  [convertToMillisecs('2018-07-10'), 54.7]
                ],
            legend: 'Carbohydrates'
        },
        {
            data: [
                   [convertToMillisecs('2018-07-01'), 40],    [convertToMillisecs('2018-07-02'), 45], 
                   [convertToMillisecs('2018-07-03'), 35],    [convertToMillisecs('2018-07-04'), 42], 
                   [convertToMillisecs('2018-07-05'), 27.7],   [convertToMillisecs('2018-07-06'), 28.4], 
                   [convertToMillisecs('2018-07-07'), 84.66], [convertToMillisecs('2018-07-08'), 52.4], 
                   [convertToMillisecs('2018-07-09'), 35.1],  [convertToMillisecs('2018-07-10'), 74.7]
                ],
            legend: 'Proteins'
        },
        {
            data: [
                   [convertToMillisecs('2018-07-01'), 10],    [convertToMillisecs('2018-07-02'), 40], 
                   [convertToMillisecs('2018-07-03'), 15],    [convertToMillisecs('2018-07-04'), 46], 
                   [convertToMillisecs('2018-07-05'), 7.7],   [convertToMillisecs('2018-07-06'), 22.4], 
                   [convertToMillisecs('2018-07-07'), 34.66], [convertToMillisecs('2018-07-08'), 22.4], 
                   [convertToMillisecs('2018-07-09'), 45.1],  [convertToMillisecs('2018-07-10'), 34.7]
                ],
            legend: 'Fats'
        }
    ]
}

function convertToMillisecs(date) {
    return new Date(date).valueOf();
}
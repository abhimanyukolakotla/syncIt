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
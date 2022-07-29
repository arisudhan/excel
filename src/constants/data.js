const excelData =
  [
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.08.00",
      "TimeDecimal": 9.08,
      "Open": 12202.15,
      "High": 12202.15,
      "Low": 12202.15,
      "Close": 12202.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.16.00",
      "TimeDecimal": 9.16,
      "Open": 12204.45,
      "High": 12216.25,
      "Low": 12201.55,
      "Close": 12215.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.17.00",
      "TimeDecimal": 9.17,
      "Open": 12215.45,
      "High": 12216.45,
      "Low": 12205.7,
      "Close": 12206.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.18.00",
      "TimeDecimal": 9.18,
      "Open": 12206.5,
      "High": 12207.4,
      "Low": 12202.7,
      "Close": 12202.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.19.00",
      "TimeDecimal": 9.19,
      "Open": 12203.55,
      "High": 12208.4,
      "Low": 12201.2,
      "Close": 12207.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.20.00",
      "TimeDecimal": 9.20,
      "Open": 12208.35,
      "High": 12213.2,
      "Low": 12207.7,
      "Close": 12212.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.21.00",
      "TimeDecimal": 9.21,
      "Open": 12211.3,
      "High": 12212.75,
      "Low": 12210,
      "Close": 12211.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.22.00",
      "TimeDecimal": 9.22,
      "Open": 12211.35,
      "High": 12212,
      "Low": 12208.8,
      "Close": 12209.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.23.00",
      "TimeDecimal": 9.23,
      "Open": 12210.05,
      "High": 12213.7,
      "Low": 12209.85,
      "Close": 12212.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.24.00",
      "TimeDecimal": 9.24,
      "Open": 12213.1,
      "High": 12217.85,
      "Low": 12212.6,
      "Close": 12217.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.25.00",
      "TimeDecimal": 9.25,
      "Open": 12218.2,
      "High": 12218.8,
      "Low": 12214.35,
      "Close": 12215.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.26.00",
      "TimeDecimal": 9.26,
      "Open": 12215.15,
      "High": 12215.7,
      "Low": 12211.35,
      "Close": 12213.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.27.00",
      "TimeDecimal": 9.27,
      "Open": 12213.8,
      "High": 12217.9,
      "Low": 12213.65,
      "Close": 12217.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.28.00",
      "TimeDecimal": 9.28,
      "Open": 12216.55,
      "High": 12218.25,
      "Low": 12216.35,
      "Close": 12217.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.29.00",
      "TimeDecimal": 9.29,
      "Open": 12217.55,
      "High": 12217.8,
      "Low": 12215.85,
      "Close": 12217.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.30.00",
      "TimeDecimal": 9.3,
      "Open": 12216.9,
      "High": 12222.2,
      "Low": 12216.8,
      "Close": 12222.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.31.00",
      "TimeDecimal": 9.31,
      "Open": 12221.65,
      "High": 12221.9,
      "Low": 12218.6,
      "Close": 12219.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.32.00",
      "TimeDecimal": 9.32,
      "Open": 12219.4,
      "High": 12220.7,
      "Low": 12218.25,
      "Close": 12218.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.33.00",
      "TimeDecimal": 9.33,
      "Open": 12219.1,
      "High": 12221.1,
      "Low": 12218.75,
      "Close": 12220.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.34.00",
      "TimeDecimal": 9.34,
      "Open": 12220.7,
      "High": 12220.9,
      "Low": 12217.65,
      "Close": 12218
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.35.00",
      "TimeDecimal": 9.35,
      "Open": 12218.65,
      "High": 12218.65,
      "Low": 12212.8,
      "Close": 12212.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.36.00",
      "TimeDecimal": 9.36,
      "Open": 12213.55,
      "High": 12213.85,
      "Low": 12210.4,
      "Close": 12210.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.37.00",
      "TimeDecimal": 9.37,
      "Open": 12210.45,
      "High": 12210.45,
      "Low": 12205.5,
      "Close": 12208.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.38.00",
      "TimeDecimal": 9.38,
      "Open": 12208.85,
      "High": 12210,
      "Low": 12205.9,
      "Close": 12207.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.39.00",
      "TimeDecimal": 9.39,
      "Open": 12207.55,
      "High": 12209.35,
      "Low": 12207.1,
      "Close": 12209.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.40.00",
      "TimeDecimal": 9.4,
      "Open": 12208.85,
      "High": 12209,
      "Low": 12206.4,
      "Close": 12208.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.41.00",
      "TimeDecimal": 9.41,
      "Open": 12208.2,
      "High": 12208.75,
      "Low": 12207.4,
      "Close": 12208.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.42.00",
      "TimeDecimal": 9.42,
      "Open": 12208.3,
      "High": 12208.3,
      "Low": 12196.85,
      "Close": 12201.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.43.00",
      "TimeDecimal": 9.43,
      "Open": 12201.75,
      "High": 12202.75,
      "Low": 12200.8,
      "Close": 12200.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.44.00",
      "TimeDecimal": 9.44,
      "Open": 12201.05,
      "High": 12202.85,
      "Low": 12200.3,
      "Close": 12202.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.45.00",
      "TimeDecimal": 9.45,
      "Open": 12202.55,
      "High": 12203.8,
      "Low": 12202,
      "Close": 12202.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.46.00",
      "TimeDecimal": 9.46,
      "Open": 12203.15,
      "High": 12204.2,
      "Low": 12198.55,
      "Close": 12198.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.47.00",
      "TimeDecimal": 9.47,
      "Open": 12198.35,
      "High": 12198.8,
      "Low": 12192,
      "Close": 12193.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.48.00",
      "TimeDecimal": 9.48,
      "Open": 12193.05,
      "High": 12194,
      "Low": 12191.4,
      "Close": 12193.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.49.00",
      "TimeDecimal": 9.49,
      "Open": 12193.8,
      "High": 12197.5,
      "Low": 12192.1,
      "Close": 12197.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.50.00",
      "TimeDecimal": 9.5,
      "Open": 12198.1,
      "High": 12199.15,
      "Low": 12195.45,
      "Close": 12195.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.51.00",
      "TimeDecimal": 9.51,
      "Open": 12195.35,
      "High": 12195.35,
      "Low": 12192.5,
      "Close": 12194.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.52.00",
      "TimeDecimal": 9.52,
      "Open": 12195.05,
      "High": 12198.4,
      "Low": 12194.9,
      "Close": 12197.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.53.00",
      "TimeDecimal": 9.53,
      "Open": 12197.3,
      "High": 12204.7,
      "Low": 12197.3,
      "Close": 12204.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.54.00",
      "TimeDecimal": 9.54,
      "Open": 12203.9,
      "High": 12205,
      "Low": 12203.45,
      "Close": 12203.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.55.00",
      "TimeDecimal": 9.55,
      "Open": 12203.8,
      "High": 12204.45,
      "Low": 12199.45,
      "Close": 12199.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.56.00",
      "TimeDecimal": 9.56,
      "Open": 12199.55,
      "High": 12200.45,
      "Low": 12198.1,
      "Close": 12199.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.57.00",
      "TimeDecimal": 9.57,
      "Open": 12199,
      "High": 12203.2,
      "Low": 12198.6,
      "Close": 12200.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.58.00",
      "TimeDecimal": 9.58,
      "Open": 12199.95,
      "High": 12200.8,
      "Low": 12198.15,
      "Close": 12199.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "09.59.00",
      "TimeDecimal": 9.59,
      "Open": 12198.55,
      "High": 12199.8,
      "Low": 12197.75,
      "Close": 12198.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.00.00",
      "TimeDecimal": 10,
      "Open": 12198.65,
      "High": 12201.2,
      "Low": 12198.45,
      "Close": 12200.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.01.00",
      "TimeDecimal": 10.01,
      "Open": 12200.5,
      "High": 12201.2,
      "Low": 12198.05,
      "Close": 12199.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.02.00",
      "TimeDecimal": 10.02,
      "Open": 12199.15,
      "High": 12200.35,
      "Low": 12197.1,
      "Close": 12197.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.03.00",
      "TimeDecimal": 10.03,
      "Open": 12197,
      "High": 12197.3,
      "Low": 12195.15,
      "Close": 12195.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.04.00",
      "TimeDecimal": 10.04,
      "Open": 12195.7,
      "High": 12196.05,
      "Low": 12193.65,
      "Close": 12194.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.05.00",
      "TimeDecimal": 10.05,
      "Open": 12194.15,
      "High": 12195.2,
      "Low": 12192.7,
      "Close": 12195.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.06.00",
      "TimeDecimal": 10.06,
      "Open": 12195.4,
      "High": 12195.9,
      "Low": 12193.05,
      "Close": 12193.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.07.00",
      "TimeDecimal": 10.07,
      "Open": 12193.35,
      "High": 12195.2,
      "Low": 12193.25,
      "Close": 12193.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.08.00",
      "TimeDecimal": 10.08,
      "Open": 12193.45,
      "High": 12195.4,
      "Low": 12193.2,
      "Close": 12195.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.09.00",
      "TimeDecimal": 10.09,
      "Open": 12194.9,
      "High": 12194.9,
      "Low": 12190.75,
      "Close": 12191.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.10.00",
      "TimeDecimal": 10.1,
      "Open": 12192.4,
      "High": 12192.7,
      "Low": 12184.7,
      "Close": 12186.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.11.00",
      "TimeDecimal": 10.11,
      "Open": 12186.7,
      "High": 12188.55,
      "Low": 12184.55,
      "Close": 12187.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.12.00",
      "TimeDecimal": 10.12,
      "Open": 12188.3,
      "High": 12191.1,
      "Low": 12187.35,
      "Close": 12188.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.13.00",
      "TimeDecimal": 10.13,
      "Open": 12190.05,
      "High": 12193.2,
      "Low": 12189.45,
      "Close": 12192.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.14.00",
      "TimeDecimal": 10.14,
      "Open": 12191.7,
      "High": 12194.05,
      "Low": 12191.7,
      "Close": 12192.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.15.00",
      "TimeDecimal": 10.15,
      "Open": 12191.65,
      "High": 12192,
      "Low": 12189.85,
      "Close": 12190.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.16.00",
      "TimeDecimal": 10.16,
      "Open": 12190.65,
      "High": 12191.8,
      "Low": 12187.4,
      "Close": 12189.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.17.00",
      "TimeDecimal": 10.17,
      "Open": 12189.05,
      "High": 12190.45,
      "Low": 12188.6,
      "Close": 12188.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.18.00",
      "TimeDecimal": 10.18,
      "Open": 12189.1,
      "High": 12192.45,
      "Low": 12189.1,
      "Close": 12191.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.19.00",
      "TimeDecimal": 10.19,
      "Open": 12192.45,
      "High": 12192.75,
      "Low": 12190.65,
      "Close": 12192.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.20.00",
      "TimeDecimal": 10.2,
      "Open": 12192.1,
      "High": 12193.05,
      "Low": 12191.7,
      "Close": 12193.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.21.00",
      "TimeDecimal": 10.21,
      "Open": 12192.75,
      "High": 12197.75,
      "Low": 12192.75,
      "Close": 12197.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.22.00",
      "TimeDecimal": 10.22,
      "Open": 12196.9,
      "High": 12199.75,
      "Low": 12196.9,
      "Close": 12199.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.23.00",
      "TimeDecimal": 10.23,
      "Open": 12200,
      "High": 12200.2,
      "Low": 12195.7,
      "Close": 12195.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.24.00",
      "TimeDecimal": 10.24,
      "Open": 12195.85,
      "High": 12196.5,
      "Low": 12195.35,
      "Close": 12196
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.25.00",
      "TimeDecimal": 10.25,
      "Open": 12196.15,
      "High": 12197.7,
      "Low": 12195.3,
      "Close": 12196.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.26.00",
      "TimeDecimal": 10.26,
      "Open": 12196.2,
      "High": 12196.55,
      "Low": 12194.2,
      "Close": 12195.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.27.00",
      "TimeDecimal": 10.27,
      "Open": 12195,
      "High": 12197.45,
      "Low": 12195,
      "Close": 12197.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.28.00",
      "TimeDecimal": 10.28,
      "Open": 12197.65,
      "High": 12198.3,
      "Low": 12196.65,
      "Close": 12197.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.29.00",
      "TimeDecimal": 10.29,
      "Open": 12196.9,
      "High": 12199.6,
      "Low": 12196.9,
      "Close": 12199.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.30.00",
      "TimeDecimal": 10.3,
      "Open": 12200.15,
      "High": 12200.45,
      "Low": 12197.6,
      "Close": 12197.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.31.00",
      "TimeDecimal": 10.31,
      "Open": 12198.2,
      "High": 12198.2,
      "Low": 12190.25,
      "Close": 12190.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.32.00",
      "TimeDecimal": 10.32,
      "Open": 12190.2,
      "High": 12193.65,
      "Low": 12190.2,
      "Close": 12192.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.33.00",
      "TimeDecimal": 10.33,
      "Open": 12192.9,
      "High": 12195.05,
      "Low": 12192.45,
      "Close": 12195
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.34.00",
      "TimeDecimal": 10.34,
      "Open": 12194.55,
      "High": 12197.05,
      "Low": 12194.35,
      "Close": 12196.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.35.00",
      "TimeDecimal": 10.35,
      "Open": 12196.8,
      "High": 12197.55,
      "Low": 12196.1,
      "Close": 12196.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.36.00",
      "TimeDecimal": 10.36,
      "Open": 12195.45,
      "High": 12197,
      "Low": 12193.7,
      "Close": 12193.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.37.00",
      "TimeDecimal": 10.37,
      "Open": 12193.8,
      "High": 12195.35,
      "Low": 12193.1,
      "Close": 12194.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.38.00",
      "TimeDecimal": 10.38,
      "Open": 12195,
      "High": 12195.45,
      "Low": 12193.7,
      "Close": 12194.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.39.00",
      "TimeDecimal": 10.39,
      "Open": 12193.55,
      "High": 12194.3,
      "Low": 12192.55,
      "Close": 12193
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.40.00",
      "TimeDecimal": 10.4,
      "Open": 12193.15,
      "High": 12194.1,
      "Low": 12190.25,
      "Close": 12193.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.41.00",
      "TimeDecimal": 10.41,
      "Open": 12193.3,
      "High": 12194.45,
      "Low": 12192.85,
      "Close": 12194.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.42.00",
      "TimeDecimal": 10.42,
      "Open": 12193.85,
      "High": 12196.35,
      "Low": 12193.85,
      "Close": 12196.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.43.00",
      "TimeDecimal": 10.43,
      "Open": 12195.85,
      "High": 12196.75,
      "Low": 12195.2,
      "Close": 12196.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.44.00",
      "TimeDecimal": 10.44,
      "Open": 12196.55,
      "High": 12197,
      "Low": 12193.6,
      "Close": 12194.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.45.00",
      "TimeDecimal": 10.45,
      "Open": 12193.9,
      "High": 12194.25,
      "Low": 12190.95,
      "Close": 12192
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.46.00",
      "TimeDecimal": 10.46,
      "Open": 12192.25,
      "High": 12193.65,
      "Low": 12190.8,
      "Close": 12192.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.47.00",
      "TimeDecimal": 10.47,
      "Open": 12193.1,
      "High": 12193.1,
      "Low": 12190.45,
      "Close": 12190.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.48.00",
      "TimeDecimal": 10.48,
      "Open": 12190.7,
      "High": 12190.9,
      "Low": 12186,
      "Close": 12186.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.49.00",
      "TimeDecimal": 10.49,
      "Open": 12186.45,
      "High": 12186.6,
      "Low": 12182.95,
      "Close": 12183.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.50.00",
      "TimeDecimal": 10.5,
      "Open": 12183.45,
      "High": 12184.05,
      "Low": 12181.6,
      "Close": 12182.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.51.00",
      "TimeDecimal": 10.51,
      "Open": 12182.7,
      "High": 12182.7,
      "Low": 12178.85,
      "Close": 12180.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.52.00",
      "TimeDecimal": 10.52,
      "Open": 12180.7,
      "High": 12180.7,
      "Low": 12176.05,
      "Close": 12176.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.53.00",
      "TimeDecimal": 10.53,
      "Open": 12176.95,
      "High": 12177.1,
      "Low": 12169.8,
      "Close": 12172.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.54.00",
      "TimeDecimal": 10.54,
      "Open": 12172.55,
      "High": 12175,
      "Low": 12171.65,
      "Close": 12174.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.55.00",
      "TimeDecimal": 10.55,
      "Open": 12174.4,
      "High": 12176.9,
      "Low": 12173.85,
      "Close": 12176.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.56.00",
      "TimeDecimal": 10.56,
      "Open": 12176.35,
      "High": 12177.3,
      "Low": 12175.4,
      "Close": 12176
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.57.00",
      "TimeDecimal": 10.57,
      "Open": 12175.95,
      "High": 12177.3,
      "Low": 12175.15,
      "Close": 12177.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.58.00",
      "TimeDecimal": 10.58,
      "Open": 12176.45,
      "High": 12177.85,
      "Low": 12176.45,
      "Close": 12176.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "10.59.00",
      "TimeDecimal": 10.59,
      "Open": 12177.2,
      "High": 12177.6,
      "Low": 12176.35,
      "Close": 12177.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.00.00",
      "TimeDecimal": 11,
      "Open": 12177.25,
      "High": 12177.6,
      "Low": 12175.95,
      "Close": 12177.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.01.00",
      "TimeDecimal": 11.01,
      "Open": 12177.35,
      "High": 12178.1,
      "Low": 12176.6,
      "Close": 12177.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.02.00",
      "TimeDecimal": 11.02,
      "Open": 12177.65,
      "High": 12183.05,
      "Low": 12177.65,
      "Close": 12182.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.03.00",
      "TimeDecimal": 11.03,
      "Open": 12183,
      "High": 12184.2,
      "Low": 12182.35,
      "Close": 12183.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.04.00",
      "TimeDecimal": 11.04,
      "Open": 12182.9,
      "High": 12183.3,
      "Low": 12181.35,
      "Close": 12182.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.05.00",
      "TimeDecimal": 11.05,
      "Open": 12182.35,
      "High": 12182.35,
      "Low": 12179.55,
      "Close": 12180.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.06.00",
      "TimeDecimal": 11.06,
      "Open": 12180.5,
      "High": 12182.05,
      "Low": 12179.55,
      "Close": 12181.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.07.00",
      "TimeDecimal": 11.07,
      "Open": 12181.85,
      "High": 12185.75,
      "Low": 12181.3,
      "Close": 12185.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.08.00",
      "TimeDecimal": 11.08,
      "Open": 12185.6,
      "High": 12186.05,
      "Low": 12184.6,
      "Close": 12185.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.09.00",
      "TimeDecimal": 11.09,
      "Open": 12184.6,
      "High": 12186.45,
      "Low": 12183.85,
      "Close": 12186.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.10.00",
      "TimeDecimal": 11.1,
      "Open": 12186.1,
      "High": 12187.1,
      "Low": 12184.65,
      "Close": 12185.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.11.00",
      "TimeDecimal": 11.11,
      "Open": 12184.9,
      "High": 12185.65,
      "Low": 12183.85,
      "Close": 12183.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.12.00",
      "TimeDecimal": 11.12,
      "Open": 12183.95,
      "High": 12184.1,
      "Low": 12181.7,
      "Close": 12182.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.13.00",
      "TimeDecimal": 11.13,
      "Open": 12182,
      "High": 12182.65,
      "Low": 12181.05,
      "Close": 12182.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.14.00",
      "TimeDecimal": 11.14,
      "Open": 12182.2,
      "High": 12184.55,
      "Low": 12181.6,
      "Close": 12184.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.15.00",
      "TimeDecimal": 11.15,
      "Open": 12184.65,
      "High": 12184.85,
      "Low": 12183.1,
      "Close": 12183.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.16.00",
      "TimeDecimal": 11.16,
      "Open": 12183.4,
      "High": 12186.7,
      "Low": 12182.75,
      "Close": 12186.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.17.00",
      "TimeDecimal": 11.17,
      "Open": 12186.8,
      "High": 12187.15,
      "Low": 12185.9,
      "Close": 12186.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.18.00",
      "TimeDecimal": 11.18,
      "Open": 12186.65,
      "High": 12187.1,
      "Low": 12185.3,
      "Close": 12186.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.19.00",
      "TimeDecimal": 11.19,
      "Open": 12186.65,
      "High": 12186.9,
      "Low": 12184.1,
      "Close": 12184.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.20.00",
      "TimeDecimal": 11.2,
      "Open": 12184,
      "High": 12184.7,
      "Low": 12182.65,
      "Close": 12184.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.21.00",
      "TimeDecimal": 11.21,
      "Open": 12184.05,
      "High": 12185.15,
      "Low": 12181.2,
      "Close": 12182.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.22.00",
      "TimeDecimal": 11.22,
      "Open": 12182.35,
      "High": 12182.5,
      "Low": 12179.95,
      "Close": 12180.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.23.00",
      "TimeDecimal": 11.23,
      "Open": 12180.65,
      "High": 12180.95,
      "Low": 12179.25,
      "Close": 12179.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.24.00",
      "TimeDecimal": 11.24,
      "Open": 12179.85,
      "High": 12180.8,
      "Low": 12177.75,
      "Close": 12178.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.25.00",
      "TimeDecimal": 11.25,
      "Open": 12177.9,
      "High": 12178.35,
      "Low": 12176.7,
      "Close": 12177.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.26.00",
      "TimeDecimal": 11.26,
      "Open": 12177.5,
      "High": 12177.85,
      "Low": 12175.55,
      "Close": 12175.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.27.00",
      "TimeDecimal": 11.27,
      "Open": 12176.1,
      "High": 12177,
      "Low": 12175.65,
      "Close": 12175.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.28.00",
      "TimeDecimal": 11.28,
      "Open": 12175.65,
      "High": 12178,
      "Low": 12175.5,
      "Close": 12178
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.29.00",
      "TimeDecimal": 11.29,
      "Open": 12177.7,
      "High": 12179.9,
      "Low": 12177.7,
      "Close": 12178.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.30.00",
      "TimeDecimal": 11.3,
      "Open": 12178.35,
      "High": 12179.45,
      "Low": 12178.2,
      "Close": 12179.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.31.00",
      "TimeDecimal": 11.31,
      "Open": 12178.65,
      "High": 12180.35,
      "Low": 12178.4,
      "Close": 12180.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.32.00",
      "TimeDecimal": 11.32,
      "Open": 12180.25,
      "High": 12181.65,
      "Low": 12179.55,
      "Close": 12181.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.33.00",
      "TimeDecimal": 11.33,
      "Open": 12181.2,
      "High": 12182.8,
      "Low": 12181.2,
      "Close": 12182.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.34.00",
      "TimeDecimal": 11.34,
      "Open": 12182.7,
      "High": 12183.2,
      "Low": 12182.1,
      "Close": 12183.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.35.00",
      "TimeDecimal": 11.35,
      "Open": 12182.8,
      "High": 12184,
      "Low": 12182.8,
      "Close": 12183.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.36.00",
      "TimeDecimal": 11.36,
      "Open": 12183.45,
      "High": 12183.85,
      "Low": 12182.15,
      "Close": 12183.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.37.00",
      "TimeDecimal": 11.37,
      "Open": 12182.9,
      "High": 12183.45,
      "Low": 12181.85,
      "Close": 12183.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.38.00",
      "TimeDecimal": 11.38,
      "Open": 12183.1,
      "High": 12183.35,
      "Low": 12181.75,
      "Close": 12182.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.39.00",
      "TimeDecimal": 11.39,
      "Open": 12182.6,
      "High": 12183.15,
      "Low": 12181.7,
      "Close": 12182
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.40.00",
      "TimeDecimal": 11.4,
      "Open": 12182.05,
      "High": 12182.6,
      "Low": 12179.5,
      "Close": 12181.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.41.00",
      "TimeDecimal": 11.41,
      "Open": 12180.8,
      "High": 12180.85,
      "Low": 12179.4,
      "Close": 12179.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.42.00",
      "TimeDecimal": 11.42,
      "Open": 12179.75,
      "High": 12180.2,
      "Low": 12179.25,
      "Close": 12179.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.43.00",
      "TimeDecimal": 11.43,
      "Open": 12179.55,
      "High": 12179.85,
      "Low": 12178.15,
      "Close": 12179.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.44.00",
      "TimeDecimal": 11.44,
      "Open": 12178.7,
      "High": 12178.85,
      "Low": 12177.9,
      "Close": 12178.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.45.00",
      "TimeDecimal": 11.45,
      "Open": 12178.7,
      "High": 12179.45,
      "Low": 12178.05,
      "Close": 12179.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.46.00",
      "TimeDecimal": 11.46,
      "Open": 12179.35,
      "High": 12179.35,
      "Low": 12177.8,
      "Close": 12177.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.47.00",
      "TimeDecimal": 11.47,
      "Open": 12177.9,
      "High": 12179.75,
      "Low": 12177.9,
      "Close": 12179.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.48.00",
      "TimeDecimal": 11.48,
      "Open": 12179.15,
      "High": 12179.2,
      "Low": 12177.15,
      "Close": 12178.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.49.00",
      "TimeDecimal": 11.49,
      "Open": 12178.2,
      "High": 12179.85,
      "Low": 12177.7,
      "Close": 12179.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.50.00",
      "TimeDecimal": 11.5,
      "Open": 12179.9,
      "High": 12180.45,
      "Low": 12178.8,
      "Close": 12179.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.51.00",
      "TimeDecimal": 11.51,
      "Open": 12179.6,
      "High": 12180,
      "Low": 12178.2,
      "Close": 12179.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.52.00",
      "TimeDecimal": 11.52,
      "Open": 12179.7,
      "High": 12179.75,
      "Low": 12177.7,
      "Close": 12178.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.53.00",
      "TimeDecimal": 11.53,
      "Open": 12178.45,
      "High": 12179.55,
      "Low": 12177.85,
      "Close": 12179.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.54.00",
      "TimeDecimal": 11.54,
      "Open": 12179.05,
      "High": 12179.3,
      "Low": 12177.45,
      "Close": 12177.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.55.00",
      "TimeDecimal": 11.55,
      "Open": 12177.5,
      "High": 12178.1,
      "Low": 12175.55,
      "Close": 12176.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.56.00",
      "TimeDecimal": 11.56,
      "Open": 12176.3,
      "High": 12176.35,
      "Low": 12175.2,
      "Close": 12175.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.57.00",
      "TimeDecimal": 11.57,
      "Open": 12175.8,
      "High": 12175.85,
      "Low": 12173.95,
      "Close": 12174.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.58.00",
      "TimeDecimal": 11.58,
      "Open": 12174.35,
      "High": 12174.9,
      "Low": 12173.4,
      "Close": 12174.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "11.59.00",
      "TimeDecimal": 11.59,
      "Open": 12174.8,
      "High": 12174.8,
      "Low": 12172.55,
      "Close": 12173.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.00.00",
      "TimeDecimal": 12,
      "Open": 12173.65,
      "High": 12176.3,
      "Low": 12172.7,
      "Close": 12176.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.01.00",
      "TimeDecimal": 12.01,
      "Open": 12175.95,
      "High": 12177.35,
      "Low": 12174.9,
      "Close": 12177.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.02.00",
      "TimeDecimal": 12.02,
      "Open": 12177,
      "High": 12177.6,
      "Low": 12176.4,
      "Close": 12177.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.03.00",
      "TimeDecimal": 12.03,
      "Open": 12177.55,
      "High": 12178.35,
      "Low": 12177.05,
      "Close": 12178.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.04.00",
      "TimeDecimal": 12.04,
      "Open": 12177.9,
      "High": 12178.35,
      "Low": 12176.85,
      "Close": 12178
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.05.00",
      "TimeDecimal": 12.05,
      "Open": 12178.05,
      "High": 12187.7,
      "Low": 12177.65,
      "Close": 12186
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.06.00",
      "TimeDecimal": 12.06,
      "Open": 12185.9,
      "High": 12188.65,
      "Low": 12185.5,
      "Close": 12188.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.07.00",
      "TimeDecimal": 12.07,
      "Open": 12188.7,
      "High": 12189.1,
      "Low": 12187.3,
      "Close": 12187.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.08.00",
      "TimeDecimal": 12.08,
      "Open": 12187.55,
      "High": 12187.6,
      "Low": 12185.2,
      "Close": 12185.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.09.00",
      "TimeDecimal": 12.09,
      "Open": 12186.05,
      "High": 12187.2,
      "Low": 12185.45,
      "Close": 12186.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.10.00",
      "TimeDecimal": 12.1,
      "Open": 12185.95,
      "High": 12187,
      "Low": 12184.85,
      "Close": 12185.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.11.00",
      "TimeDecimal": 12.11,
      "Open": 12185.6,
      "High": 12185.6,
      "Low": 12182.65,
      "Close": 12184.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.12.00",
      "TimeDecimal": 12.12,
      "Open": 12184.8,
      "High": 12186.7,
      "Low": 12184.3,
      "Close": 12186.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.13.00",
      "TimeDecimal": 12.13,
      "Open": 12186.6,
      "High": 12186.95,
      "Low": 12185.3,
      "Close": 12186.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.14.00",
      "TimeDecimal": 12.14,
      "Open": 12186.65,
      "High": 12187.45,
      "Low": 12185.85,
      "Close": 12186.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.15.00",
      "TimeDecimal": 12.15,
      "Open": 12186.15,
      "High": 12187.8,
      "Low": 12186,
      "Close": 12187.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.16.00",
      "TimeDecimal": 12.16,
      "Open": 12187.35,
      "High": 12188.2,
      "Low": 12186.8,
      "Close": 12187.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.17.00",
      "TimeDecimal": 12.17,
      "Open": 12188.2,
      "High": 12193.15,
      "Low": 12187.3,
      "Close": 12191.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.18.00",
      "TimeDecimal": 12.18,
      "Open": 12190.95,
      "High": 12193.05,
      "Low": 12190.95,
      "Close": 12192.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.19.00",
      "TimeDecimal": 12.19,
      "Open": 12192.55,
      "High": 12192.7,
      "Low": 12190.45,
      "Close": 12191
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.20.00",
      "TimeDecimal": 12.2,
      "Open": 12190.45,
      "High": 12191.05,
      "Low": 12188.8,
      "Close": 12190.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.21.00",
      "TimeDecimal": 12.21,
      "Open": 12189.5,
      "High": 12189.85,
      "Low": 12187.7,
      "Close": 12188.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.22.00",
      "TimeDecimal": 12.22,
      "Open": 12188.6,
      "High": 12188.65,
      "Low": 12184,
      "Close": 12184.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.23.00",
      "TimeDecimal": 12.23,
      "Open": 12184.85,
      "High": 12184.85,
      "Low": 12182.3,
      "Close": 12183.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.24.00",
      "TimeDecimal": 12.24,
      "Open": 12182.95,
      "High": 12183,
      "Low": 12181.3,
      "Close": 12182.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.25.00",
      "TimeDecimal": 12.25,
      "Open": 12182.05,
      "High": 12182.4,
      "Low": 12178.85,
      "Close": 12179.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.26.00",
      "TimeDecimal": 12.26,
      "Open": 12179.9,
      "High": 12179.9,
      "Low": 12178.05,
      "Close": 12178.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.27.00",
      "TimeDecimal": 12.27,
      "Open": 12178.1,
      "High": 12178.55,
      "Low": 12176.35,
      "Close": 12177.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.28.00",
      "TimeDecimal": 12.28,
      "Open": 12177.55,
      "High": 12177.75,
      "Low": 12175.75,
      "Close": 12177.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.29.00",
      "TimeDecimal": 12.29,
      "Open": 12177.2,
      "High": 12177.7,
      "Low": 12174.5,
      "Close": 12175.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.30.00",
      "TimeDecimal": 12.3,
      "Open": 12174.4,
      "High": 12175.6,
      "Low": 12171.95,
      "Close": 12171.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.31.00",
      "TimeDecimal": 12.31,
      "Open": 12171.75,
      "High": 12172.1,
      "Low": 12165.3,
      "Close": 12166.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.32.00",
      "TimeDecimal": 12.32,
      "Open": 12166.85,
      "High": 12167.8,
      "Low": 12165.85,
      "Close": 12167.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.33.00",
      "TimeDecimal": 12.33,
      "Open": 12167.65,
      "High": 12171.3,
      "Low": 12167.65,
      "Close": 12170.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.34.00",
      "TimeDecimal": 12.34,
      "Open": 12171.15,
      "High": 12173.6,
      "Low": 12170.15,
      "Close": 12173.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.35.00",
      "TimeDecimal": 12.35,
      "Open": 12172.75,
      "High": 12174.1,
      "Low": 12171.8,
      "Close": 12174.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.36.00",
      "TimeDecimal": 12.36,
      "Open": 12173.9,
      "High": 12177.7,
      "Low": 12173.9,
      "Close": 12177.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.37.00",
      "TimeDecimal": 12.37,
      "Open": 12177.4,
      "High": 12177.4,
      "Low": 12175.35,
      "Close": 12176.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.38.00",
      "TimeDecimal": 12.38,
      "Open": 12175.85,
      "High": 12177.25,
      "Low": 12174.9,
      "Close": 12175.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.39.00",
      "TimeDecimal": 12.39,
      "Open": 12175.85,
      "High": 12178,
      "Low": 12175.55,
      "Close": 12177.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.40.00",
      "TimeDecimal": 12.4,
      "Open": 12176.8,
      "High": 12178.75,
      "Low": 12175.9,
      "Close": 12178.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.41.00",
      "TimeDecimal": 12.41,
      "Open": 12177.55,
      "High": 12178.05,
      "Low": 12174.65,
      "Close": 12175.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.42.00",
      "TimeDecimal": 12.42,
      "Open": 12175.3,
      "High": 12176.1,
      "Low": 12173,
      "Close": 12174.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.43.00",
      "TimeDecimal": 12.43,
      "Open": 12174.35,
      "High": 12176.35,
      "Low": 12173.9,
      "Close": 12176.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.44.00",
      "TimeDecimal": 12.44,
      "Open": 12176.15,
      "High": 12177.75,
      "Low": 12175.65,
      "Close": 12176.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.45.00",
      "TimeDecimal": 12.45,
      "Open": 12176.5,
      "High": 12177.85,
      "Low": 12175.4,
      "Close": 12176.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.46.00",
      "TimeDecimal": 12.46,
      "Open": 12175.8,
      "High": 12179,
      "Low": 12175.8,
      "Close": 12178.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.47.00",
      "TimeDecimal": 12.47,
      "Open": 12178.65,
      "High": 12179.75,
      "Low": 12177.65,
      "Close": 12179.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.48.00",
      "TimeDecimal": 12.48,
      "Open": 12180.05,
      "High": 12181.2,
      "Low": 12178.95,
      "Close": 12180.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.49.00",
      "TimeDecimal": 12.49,
      "Open": 12180.95,
      "High": 12182.6,
      "Low": 12179.15,
      "Close": 12180.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.50.00",
      "TimeDecimal": 12.5,
      "Open": 12180.3,
      "High": 12181.75,
      "Low": 12179.6,
      "Close": 12181.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.51.00",
      "TimeDecimal": 12.51,
      "Open": 12181.25,
      "High": 12182.45,
      "Low": 12180.9,
      "Close": 12181.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.52.00",
      "TimeDecimal": 12.52,
      "Open": 12181.85,
      "High": 12182.75,
      "Low": 12181.05,
      "Close": 12182.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.53.00",
      "TimeDecimal": 12.53,
      "Open": 12182.3,
      "High": 12182.6,
      "Low": 12180.9,
      "Close": 12181.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.54.00",
      "TimeDecimal": 12.54,
      "Open": 12182.05,
      "High": 12182.9,
      "Low": 12181.1,
      "Close": 12181.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.55.00",
      "TimeDecimal": 12.55,
      "Open": 12181.4,
      "High": 12182.3,
      "Low": 12180.2,
      "Close": 12181.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.56.00",
      "TimeDecimal": 12.56,
      "Open": 12181.4,
      "High": 12181.85,
      "Low": 12178.35,
      "Close": 12178.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.57.00",
      "TimeDecimal": 12.57,
      "Open": 12178.8,
      "High": 12180.3,
      "Low": 12178.2,
      "Close": 12179.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.58.00",
      "TimeDecimal": 12.58,
      "Open": 12179.75,
      "High": 12181.9,
      "Low": 12179.3,
      "Close": 12181.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "12.59.00",
      "TimeDecimal": 12.59,
      "Open": 12181.6,
      "High": 12183.5,
      "Low": 12180.15,
      "Close": 12182.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.00.00",
      "TimeDecimal": 13,
      "Open": 12182.6,
      "High": 12183.25,
      "Low": 12181.2,
      "Close": 12182.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.01.00",
      "TimeDecimal": 13.01,
      "Open": 12182.85,
      "High": 12183.4,
      "Low": 12181.1,
      "Close": 12182.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.02.00",
      "TimeDecimal": 13.02,
      "Open": 12182.95,
      "High": 12182.95,
      "Low": 12180.75,
      "Close": 12181.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.03.00",
      "TimeDecimal": 13.03,
      "Open": 12181.05,
      "High": 12182.4,
      "Low": 12180.8,
      "Close": 12181.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.04.00",
      "TimeDecimal": 13.04,
      "Open": 12180.7,
      "High": 12181.85,
      "Low": 12179.9,
      "Close": 12181.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.05.00",
      "TimeDecimal": 13.05,
      "Open": 12181.65,
      "High": 12182.7,
      "Low": 12181.2,
      "Close": 12181.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.06.00",
      "TimeDecimal": 13.06,
      "Open": 12181.95,
      "High": 12182.8,
      "Low": 12180.4,
      "Close": 12181.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.07.00",
      "TimeDecimal": 13.07,
      "Open": 12181.15,
      "High": 12182.4,
      "Low": 12180,
      "Close": 12181.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.08.00",
      "TimeDecimal": 13.08,
      "Open": 12181.15,
      "High": 12181.75,
      "Low": 12180.2,
      "Close": 12180.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.09.00",
      "TimeDecimal": 13.09,
      "Open": 12180.85,
      "High": 12181.45,
      "Low": 12179.8,
      "Close": 12180.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.10.00",
      "TimeDecimal": 13.1,
      "Open": 12180.25,
      "High": 12182.05,
      "Low": 12180.25,
      "Close": 12181.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.11.00",
      "TimeDecimal": 13.11,
      "Open": 12181.5,
      "High": 12181.85,
      "Low": 12180,
      "Close": 12181.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.12.00",
      "TimeDecimal": 13.12,
      "Open": 12181.05,
      "High": 12181.05,
      "Low": 12177.85,
      "Close": 12178.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.13.00",
      "TimeDecimal": 13.13,
      "Open": 12178.6,
      "High": 12178.95,
      "Low": 12177.3,
      "Close": 12177.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.14.00",
      "TimeDecimal": 13.14,
      "Open": 12178.15,
      "High": 12179.15,
      "Low": 12177.3,
      "Close": 12177.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.15.00",
      "TimeDecimal": 13.15,
      "Open": 12177.05,
      "High": 12177.7,
      "Low": 12174.3,
      "Close": 12175.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.16.00",
      "TimeDecimal": 13.16,
      "Open": 12175.35,
      "High": 12175.85,
      "Low": 12173.75,
      "Close": 12174.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.17.00",
      "TimeDecimal": 13.17,
      "Open": 12174.4,
      "High": 12174.95,
      "Low": 12171.75,
      "Close": 12172.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.18.00",
      "TimeDecimal": 13.18,
      "Open": 12172.4,
      "High": 12174.75,
      "Low": 12171.95,
      "Close": 12174.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.19.00",
      "TimeDecimal": 13.19,
      "Open": 12174.25,
      "High": 12177.05,
      "Low": 12173.65,
      "Close": 12177.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.20.00",
      "TimeDecimal": 13.2,
      "Open": 12177,
      "High": 12177.3,
      "Low": 12175.85,
      "Close": 12176.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.21.00",
      "TimeDecimal": 13.21,
      "Open": 12176.9,
      "High": 12182.5,
      "Low": 12176.3,
      "Close": 12181.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.22.00",
      "TimeDecimal": 13.22,
      "Open": 12181.35,
      "High": 12182.75,
      "Low": 12181.05,
      "Close": 12182
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.23.00",
      "TimeDecimal": 13.23,
      "Open": 12181.6,
      "High": 12182.25,
      "Low": 12179.9,
      "Close": 12180.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.24.00",
      "TimeDecimal": 13.24,
      "Open": 12181.05,
      "High": 12181.05,
      "Low": 12178.55,
      "Close": 12179.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.25.00",
      "TimeDecimal": 13.25,
      "Open": 12179.65,
      "High": 12179.7,
      "Low": 12176.65,
      "Close": 12177.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.26.00",
      "TimeDecimal": 13.26,
      "Open": 12177.6,
      "High": 12178.8,
      "Low": 12176.85,
      "Close": 12177.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.27.00",
      "TimeDecimal": 13.27,
      "Open": 12177.8,
      "High": 12179.9,
      "Low": 12177.75,
      "Close": 12179.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.28.00",
      "TimeDecimal": 13.28,
      "Open": 12180,
      "High": 12180.4,
      "Low": 12178.7,
      "Close": 12179.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.29.00",
      "TimeDecimal": 13.29,
      "Open": 12179.2,
      "High": 12181,
      "Low": 12178.5,
      "Close": 12181
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.30.00",
      "TimeDecimal": 13.3,
      "Open": 12181.25,
      "High": 12183.55,
      "Low": 12181.05,
      "Close": 12183.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.31.00",
      "TimeDecimal": 13.31,
      "Open": 12183.45,
      "High": 12184,
      "Low": 12182.15,
      "Close": 12183.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.32.00",
      "TimeDecimal": 13.32,
      "Open": 12183.7,
      "High": 12186.2,
      "Low": 12183,
      "Close": 12186
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.33.00",
      "TimeDecimal": 13.33,
      "Open": 12186.15,
      "High": 12186.15,
      "Low": 12184.1,
      "Close": 12184.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.34.00",
      "TimeDecimal": 13.34,
      "Open": 12184.15,
      "High": 12184.45,
      "Low": 12182.7,
      "Close": 12183.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.35.00",
      "TimeDecimal": 13.35,
      "Open": 12183.35,
      "High": 12183.8,
      "Low": 12182.15,
      "Close": 12183.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.36.00",
      "TimeDecimal": 13.36,
      "Open": 12183.8,
      "High": 12183.8,
      "Low": 12181.9,
      "Close": 12182.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.37.00",
      "TimeDecimal": 13.37,
      "Open": 12182.65,
      "High": 12182.85,
      "Low": 12181.5,
      "Close": 12182.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.38.00",
      "TimeDecimal": 13.38,
      "Open": 12182.2,
      "High": 12182.35,
      "Low": 12179.2,
      "Close": 12180.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.39.00",
      "TimeDecimal": 13.39,
      "Open": 12180,
      "High": 12180.6,
      "Low": 12179.1,
      "Close": 12179.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.40.00",
      "TimeDecimal": 13.4,
      "Open": 12180,
      "High": 12180.1,
      "Low": 12177.8,
      "Close": 12179
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.41.00",
      "TimeDecimal": 13.41,
      "Open": 12178.9,
      "High": 12180.45,
      "Low": 12178.05,
      "Close": 12178.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.42.00",
      "TimeDecimal": 13.42,
      "Open": 12178.45,
      "High": 12180.25,
      "Low": 12178.25,
      "Close": 12180.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.43.00",
      "TimeDecimal": 13.43,
      "Open": 12180.05,
      "High": 12181.65,
      "Low": 12178.3,
      "Close": 12181.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.44.00",
      "TimeDecimal": 13.44,
      "Open": 12181.2,
      "High": 12182.2,
      "Low": 12180.4,
      "Close": 12181.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.45.00",
      "TimeDecimal": 13.45,
      "Open": 12180.45,
      "High": 12182.6,
      "Low": 12180.35,
      "Close": 12182.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.46.00",
      "TimeDecimal": 13.46,
      "Open": 12182.35,
      "High": 12182.7,
      "Low": 12181.35,
      "Close": 12182
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.47.00",
      "TimeDecimal": 13.47,
      "Open": 12181.85,
      "High": 12182.25,
      "Low": 12180.75,
      "Close": 12181.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.48.00",
      "TimeDecimal": 13.48,
      "Open": 12181.2,
      "High": 12182.25,
      "Low": 12180.6,
      "Close": 12181.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.49.00",
      "TimeDecimal": 13.49,
      "Open": 12181.6,
      "High": 12182.45,
      "Low": 12180.15,
      "Close": 12180.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.50.00",
      "TimeDecimal": 13.5,
      "Open": 12180.95,
      "High": 12181.55,
      "Low": 12179.8,
      "Close": 12181.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.51.00",
      "TimeDecimal": 13.51,
      "Open": 12181.05,
      "High": 12182.5,
      "Low": 12180.4,
      "Close": 12181.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.52.00",
      "TimeDecimal": 13.52,
      "Open": 12180.9,
      "High": 12183.55,
      "Low": 12180.8,
      "Close": 12183.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.53.00",
      "TimeDecimal": 13.53,
      "Open": 12183.35,
      "High": 12190.8,
      "Low": 12182.55,
      "Close": 12189.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.54.00",
      "TimeDecimal": 13.54,
      "Open": 12190,
      "High": 12191.25,
      "Low": 12189.1,
      "Close": 12190.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.55.00",
      "TimeDecimal": 13.55,
      "Open": 12190.95,
      "High": 12192.25,
      "Low": 12190.4,
      "Close": 12192.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.56.00",
      "TimeDecimal": 13.56,
      "Open": 12192.3,
      "High": 12197.75,
      "Low": 12192.3,
      "Close": 12196.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.57.00",
      "TimeDecimal": 13.57,
      "Open": 12196.8,
      "High": 12197.75,
      "Low": 12194.55,
      "Close": 12196.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.58.00",
      "TimeDecimal": 13.58,
      "Open": 12196.1,
      "High": 12196.6,
      "Low": 12193.6,
      "Close": 12194
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "13.59.00",
      "TimeDecimal": 13.59,
      "Open": 12194.1,
      "High": 12194.55,
      "Low": 12190,
      "Close": 12190.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.00.00",
      "TimeDecimal": 14,
      "Open": 12190.75,
      "High": 12193.5,
      "Low": 12190.05,
      "Close": 12190.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.01.00",
      "TimeDecimal": 14.01,
      "Open": 12190.55,
      "High": 12191.3,
      "Low": 12189.55,
      "Close": 12189.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.02.00",
      "TimeDecimal": 14.02,
      "Open": 12190.1,
      "High": 12190.95,
      "Low": 12189.15,
      "Close": 12189.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.03.00",
      "TimeDecimal": 14.03,
      "Open": 12189.95,
      "High": 12190.05,
      "Low": 12188.55,
      "Close": 12188.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.04.00",
      "TimeDecimal": 14.04,
      "Open": 12188.8,
      "High": 12189,
      "Low": 12186.5,
      "Close": 12186.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.05.00",
      "TimeDecimal": 14.05,
      "Open": 12187.15,
      "High": 12187.55,
      "Low": 12186.35,
      "Close": 12186.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.06.00",
      "TimeDecimal": 14.06,
      "Open": 12186.5,
      "High": 12187.15,
      "Low": 12185.55,
      "Close": 12185.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.07.00",
      "TimeDecimal": 14.07,
      "Open": 12185.5,
      "High": 12189,
      "Low": 12185.35,
      "Close": 12188.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.08.00",
      "TimeDecimal": 14.08,
      "Open": 12188.5,
      "High": 12190.05,
      "Low": 12188.15,
      "Close": 12189.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.09.00",
      "TimeDecimal": 14.09,
      "Open": 12189.85,
      "High": 12191.15,
      "Low": 12189.25,
      "Close": 12189.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.10.00",
      "TimeDecimal": 14.1,
      "Open": 12189.4,
      "High": 12190.3,
      "Low": 12188.8,
      "Close": 12189.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.11.00",
      "TimeDecimal": 14.11,
      "Open": 12189.6,
      "High": 12190.65,
      "Low": 12187.45,
      "Close": 12188.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.12.00",
      "TimeDecimal": 14.12,
      "Open": 12188.8,
      "High": 12189.35,
      "Low": 12187.25,
      "Close": 12188.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.13.00",
      "TimeDecimal": 14.13,
      "Open": 12189,
      "High": 12189.45,
      "Low": 12187.9,
      "Close": 12189.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.14.00",
      "TimeDecimal": 14.14,
      "Open": 12189.1,
      "High": 12189.75,
      "Low": 12188.55,
      "Close": 12188.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.15.00",
      "TimeDecimal": 14.15,
      "Open": 12188.85,
      "High": 12189.9,
      "Low": 12180.6,
      "Close": 12182.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.16.00",
      "TimeDecimal": 14.16,
      "Open": 12182.05,
      "High": 12182.2,
      "Low": 12174.95,
      "Close": 12176.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.17.00",
      "TimeDecimal": 14.17,
      "Open": 12176.5,
      "High": 12177.35,
      "Low": 12175.3,
      "Close": 12176
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.18.00",
      "TimeDecimal": 14.18,
      "Open": 12176.55,
      "High": 12177.25,
      "Low": 12175,
      "Close": 12176.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.19.00",
      "TimeDecimal": 14.19,
      "Open": 12176.8,
      "High": 12178.8,
      "Low": 12176.55,
      "Close": 12178
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.20.00",
      "TimeDecimal": 14.2,
      "Open": 12178.15,
      "High": 12179.1,
      "Low": 12177.55,
      "Close": 12178.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.21.00",
      "TimeDecimal": 14.21,
      "Open": 12178.8,
      "High": 12180.35,
      "Low": 12178.4,
      "Close": 12178.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.22.00",
      "TimeDecimal": 14.22,
      "Open": 12179.6,
      "High": 12179.6,
      "Low": 12175.45,
      "Close": 12175.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.23.00",
      "TimeDecimal": 14.23,
      "Open": 12176.5,
      "High": 12177.9,
      "Low": 12175.1,
      "Close": 12176.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.24.00",
      "TimeDecimal": 14.24,
      "Open": 12176.5,
      "High": 12177.75,
      "Low": 12175.85,
      "Close": 12176.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.25.00",
      "TimeDecimal": 14.25,
      "Open": 12177.65,
      "High": 12177.65,
      "Low": 12176.15,
      "Close": 12176.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.26.00",
      "TimeDecimal": 14.26,
      "Open": 12177.4,
      "High": 12177.5,
      "Low": 12172.8,
      "Close": 12173.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.27.00",
      "TimeDecimal": 14.27,
      "Open": 12174.15,
      "High": 12175.85,
      "Low": 12173.65,
      "Close": 12175.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.28.00",
      "TimeDecimal": 14.28,
      "Open": 12175.35,
      "High": 12177.9,
      "Low": 12175.15,
      "Close": 12177.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.29.00",
      "TimeDecimal": 14.29,
      "Open": 12177.85,
      "High": 12178.85,
      "Low": 12177.05,
      "Close": 12177.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.30.00",
      "TimeDecimal": 14.3,
      "Open": 12178.25,
      "High": 12179.1,
      "Low": 12177.25,
      "Close": 12178.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.31.00",
      "TimeDecimal": 14.31,
      "Open": 12177.9,
      "High": 12178.2,
      "Low": 12176.85,
      "Close": 12177.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.32.00",
      "TimeDecimal": 14.32,
      "Open": 12178.1,
      "High": 12184.3,
      "Low": 12178.1,
      "Close": 12182.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.33.00",
      "TimeDecimal": 14.33,
      "Open": 12182.1,
      "High": 12183.05,
      "Low": 12178.65,
      "Close": 12180.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.34.00",
      "TimeDecimal": 14.34,
      "Open": 12180.3,
      "High": 12181.15,
      "Low": 12178.75,
      "Close": 12180.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.35.00",
      "TimeDecimal": 14.35,
      "Open": 12180.3,
      "High": 12180.5,
      "Low": 12175.55,
      "Close": 12176.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.36.00",
      "TimeDecimal": 14.36,
      "Open": 12177.15,
      "High": 12177.7,
      "Low": 12175.5,
      "Close": 12176.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.37.00",
      "TimeDecimal": 14.37,
      "Open": 12176.65,
      "High": 12178.85,
      "Low": 12176.65,
      "Close": 12176.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.38.00",
      "TimeDecimal": 14.38,
      "Open": 12176.25,
      "High": 12177,
      "Low": 12174.9,
      "Close": 12175.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.39.00",
      "TimeDecimal": 14.39,
      "Open": 12175.75,
      "High": 12176.7,
      "Low": 12175.3,
      "Close": 12175.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.40.00",
      "TimeDecimal": 14.4,
      "Open": 12175.8,
      "High": 12176.8,
      "Low": 12174.75,
      "Close": 12175.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.41.00",
      "TimeDecimal": 14.41,
      "Open": 12175.6,
      "High": 12178.65,
      "Low": 12175.35,
      "Close": 12177.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.42.00",
      "TimeDecimal": 14.42,
      "Open": 12177.75,
      "High": 12178.35,
      "Low": 12175.9,
      "Close": 12176.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.43.00",
      "TimeDecimal": 14.43,
      "Open": 12177,
      "High": 12178.55,
      "Low": 12177,
      "Close": 12177.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.44.00",
      "TimeDecimal": 14.44,
      "Open": 12177.55,
      "High": 12181.3,
      "Low": 12177.55,
      "Close": 12178.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.45.00",
      "TimeDecimal": 14.45,
      "Open": 12178.9,
      "High": 12181.15,
      "Low": 12178.9,
      "Close": 12179.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.46.00",
      "TimeDecimal": 14.46,
      "Open": 12180.75,
      "High": 12181.65,
      "Low": 12179.6,
      "Close": 12181.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.47.00",
      "TimeDecimal": 14.47,
      "Open": 12180.55,
      "High": 12181.45,
      "Low": 12179.4,
      "Close": 12179.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.48.00",
      "TimeDecimal": 14.48,
      "Open": 12179.8,
      "High": 12181.25,
      "Low": 12179,
      "Close": 12180.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.49.00",
      "TimeDecimal": 14.49,
      "Open": 12180.65,
      "High": 12183.35,
      "Low": 12180.65,
      "Close": 12182.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.50.00",
      "TimeDecimal": 14.5,
      "Open": 12182.05,
      "High": 12183.65,
      "Low": 12181.6,
      "Close": 12182.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.51.00",
      "TimeDecimal": 14.51,
      "Open": 12183.35,
      "High": 12183.35,
      "Low": 12180.8,
      "Close": 12181.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.52.00",
      "TimeDecimal": 14.52,
      "Open": 12181.1,
      "High": 12183,
      "Low": 12180.8,
      "Close": 12182.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.53.00",
      "TimeDecimal": 14.53,
      "Open": 12182.05,
      "High": 12182.35,
      "Low": 12179.85,
      "Close": 12180.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.54.00",
      "TimeDecimal": 14.54,
      "Open": 12180.55,
      "High": 12181.6,
      "Low": 12179.8,
      "Close": 12180.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.55.00",
      "TimeDecimal": 14.55,
      "Open": 12180.4,
      "High": 12181.65,
      "Low": 12179.4,
      "Close": 12179.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.56.00",
      "TimeDecimal": 14.56,
      "Open": 12179.65,
      "High": 12180.65,
      "Low": 12176.25,
      "Close": 12177.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.57.00",
      "TimeDecimal": 14.57,
      "Open": 12178.05,
      "High": 12178.05,
      "Low": 12174.8,
      "Close": 12175
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.58.00",
      "TimeDecimal": 14.58,
      "Open": 12175.5,
      "High": 12176.25,
      "Low": 12173.45,
      "Close": 12175.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "14.59.00",
      "TimeDecimal": 14.59,
      "Open": 12175.65,
      "High": 12175.65,
      "Low": 12172.1,
      "Close": 12172.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.00.00",
      "TimeDecimal": 15,
      "Open": 12171.85,
      "High": 12172.9,
      "Low": 12169.5,
      "Close": 12169.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.01.00",
      "TimeDecimal": 15.01,
      "Open": 12170.3,
      "High": 12175.75,
      "Low": 12170.05,
      "Close": 12175.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.02.00",
      "TimeDecimal": 15.02,
      "Open": 12174.55,
      "High": 12175.6,
      "Low": 12172.35,
      "Close": 12173.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.03.00",
      "TimeDecimal": 15.03,
      "Open": 12173.9,
      "High": 12173.9,
      "Low": 12171.65,
      "Close": 12171.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.04.00",
      "TimeDecimal": 15.04,
      "Open": 12171.75,
      "High": 12177.7,
      "Low": 12171.75,
      "Close": 12176.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.05.00",
      "TimeDecimal": 15.05,
      "Open": 12176.5,
      "High": 12182.7,
      "Low": 12176.5,
      "Close": 12181.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.06.00",
      "TimeDecimal": 15.06,
      "Open": 12181.4,
      "High": 12186.4,
      "Low": 12181.05,
      "Close": 12184.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.07.00",
      "TimeDecimal": 15.07,
      "Open": 12184.9,
      "High": 12188.45,
      "Low": 12184.8,
      "Close": 12185.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.08.00",
      "TimeDecimal": 15.08,
      "Open": 12185.65,
      "High": 12187.5,
      "Low": 12184.25,
      "Close": 12184.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.09.00",
      "TimeDecimal": 15.09,
      "Open": 12184.7,
      "High": 12187.4,
      "Low": 12183.45,
      "Close": 12185.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.10.00",
      "TimeDecimal": 15.1,
      "Open": 12185,
      "High": 12187.35,
      "Low": 12183.9,
      "Close": 12184.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.11.00",
      "TimeDecimal": 15.11,
      "Open": 12184.5,
      "High": 12187.3,
      "Low": 12182.4,
      "Close": 12182.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.12.00",
      "TimeDecimal": 15.12,
      "Open": 12181.75,
      "High": 12186.15,
      "Low": 12178.1,
      "Close": 12180.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.13.00",
      "TimeDecimal": 15.13,
      "Open": 12180.6,
      "High": 12184.35,
      "Low": 12180.2,
      "Close": 12182.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.14.00",
      "TimeDecimal": 15.14,
      "Open": 12182.65,
      "High": 12184.65,
      "Low": 12181.55,
      "Close": 12183.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.15.00",
      "TimeDecimal": 15.15,
      "Open": 12183.05,
      "High": 12184.85,
      "Low": 12182.05,
      "Close": 12182.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.16.00",
      "TimeDecimal": 15.16,
      "Open": 12182.3,
      "High": 12186,
      "Low": 12181.1,
      "Close": 12181.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.17.00",
      "TimeDecimal": 15.17,
      "Open": 12181.55,
      "High": 12185.75,
      "Low": 12177.3,
      "Close": 12178.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.18.00",
      "TimeDecimal": 15.18,
      "Open": 12178.6,
      "High": 12182.8,
      "Low": 12178.6,
      "Close": 12179.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.19.00",
      "TimeDecimal": 15.19,
      "Open": 12178.8,
      "High": 12184.3,
      "Low": 12178.8,
      "Close": 12182.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.20.00",
      "TimeDecimal": 15.2,
      "Open": 12182.45,
      "High": 12184.5,
      "Low": 12180.45,
      "Close": 12181.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.21.00",
      "TimeDecimal": 15.21,
      "Open": 12182.15,
      "High": 12182.95,
      "Low": 12179.2,
      "Close": 12181.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.22.00",
      "TimeDecimal": 15.22,
      "Open": 12182.05,
      "High": 12183.7,
      "Low": 12179.3,
      "Close": 12181.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.23.00",
      "TimeDecimal": 15.23,
      "Open": 12181.4,
      "High": 12184.55,
      "Low": 12180.5,
      "Close": 12182.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.24.00",
      "TimeDecimal": 15.24,
      "Open": 12182.65,
      "High": 12185.25,
      "Low": 12180.3,
      "Close": 12185.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.25.00",
      "TimeDecimal": 15.25,
      "Open": 12185.15,
      "High": 12186.75,
      "Low": 12183.65,
      "Close": 12185.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.26.00",
      "TimeDecimal": 15.26,
      "Open": 12184.8,
      "High": 12189.3,
      "Low": 12184.8,
      "Close": 12187.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.27.00",
      "TimeDecimal": 15.27,
      "Open": 12187.6,
      "High": 12189.1,
      "Low": 12186.65,
      "Close": 12187.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.28.00",
      "TimeDecimal": 15.28,
      "Open": 12187.6,
      "High": 12188.65,
      "Low": 12186.4,
      "Close": 12187.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.29.00",
      "TimeDecimal": 15.29,
      "Open": 12186.75,
      "High": 12188.95,
      "Low": 12186.4,
      "Close": 12187.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.30.00",
      "TimeDecimal": 15.3,
      "Open": 12187.35,
      "High": 12191.95,
      "Low": 12186.85,
      "Close": 12187.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.31.00",
      "TimeDecimal": 15.31,
      "Open": 12189.7,
      "High": 12189.7,
      "Low": 12189.7,
      "Close": 12189.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "15.33.00",
      "TimeDecimal": 15.33,
      "Open": 12190.4,
      "High": 12191.25,
      "Low": 12182.5,
      "Close": 12182.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200101,
      "Time": "16.39.00",
      "TimeDecimal": 16.39,
      "Open": 12182.5,
      "High": 12182.5,
      "Low": 12182.5,
      "Close": 12182.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.08.00",
      "TimeDecimal": 9.08,
      "Open": 12198.55,
      "High": 12198.55,
      "Low": 12198.55,
      "Close": 12198.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.16.00",
      "TimeDecimal": 9.16,
      "Open": 12200.2,
      "High": 12216.1,
      "Low": 12195.25,
      "Close": 12214.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.17.00",
      "TimeDecimal": 9.17,
      "Open": 12215.05,
      "High": 12215.35,
      "Low": 12207.7,
      "Close": 12210.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.18.00",
      "TimeDecimal": 9.18,
      "Open": 12209.75,
      "High": 12215.2,
      "Low": 12209.75,
      "Close": 12214.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.19.00",
      "TimeDecimal": 9.19,
      "Open": 12214.45,
      "High": 12214.45,
      "Low": 12210.3,
      "Close": 12211.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.20.00",
      "TimeDecimal": 9.2,
      "Open": 12212.15,
      "High": 12216.85,
      "Low": 12211.6,
      "Close": 12216
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.21.00",
      "TimeDecimal": 9.21,
      "Open": 12217.2,
      "High": 12220.7,
      "Low": 12216.65,
      "Close": 12217.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.22.00",
      "TimeDecimal": 9.22,
      "Open": 12217.4,
      "High": 12220.8,
      "Low": 12217.1,
      "Close": 12219.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.23.00",
      "TimeDecimal": 9.23,
      "Open": 12220.1,
      "High": 12220.3,
      "Low": 12217.3,
      "Close": 12218.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.24.00",
      "TimeDecimal": 9.24,
      "Open": 12217.65,
      "High": 12220.55,
      "Low": 12217.65,
      "Close": 12218.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.25.00",
      "TimeDecimal": 9.25,
      "Open": 12218.8,
      "High": 12219.8,
      "Low": 12217.2,
      "Close": 12218.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.26.00",
      "TimeDecimal": 9.26,
      "Open": 12217.9,
      "High": 12222,
      "Low": 12217.35,
      "Close": 12221.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.27.00",
      "TimeDecimal": 9.27,
      "Open": 12222.25,
      "High": 12225.05,
      "Low": 12221.5,
      "Close": 12224.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.28.00",
      "TimeDecimal": 9.28,
      "Open": 12225.2,
      "High": 12226.45,
      "Low": 12223.1,
      "Close": 12225.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.29.00",
      "TimeDecimal": 9.29,
      "Open": 12224.5,
      "High": 12226.9,
      "Low": 12223.85,
      "Close": 12224.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.30.00",
      "TimeDecimal": 9.3,
      "Open": 12224.9,
      "High": 12227.9,
      "Low": 12223.7,
      "Close": 12224
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.31.00",
      "TimeDecimal": 9.31,
      "Open": 12224.25,
      "High": 12228.5,
      "Low": 12223.35,
      "Close": 12228.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.32.00",
      "TimeDecimal": 9.32,
      "Open": 12228,
      "High": 12230.95,
      "Low": 12228,
      "Close": 12230.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.33.00",
      "TimeDecimal": 9.33,
      "Open": 12230.3,
      "High": 12230.45,
      "Low": 12227.9,
      "Close": 12228.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.34.00",
      "TimeDecimal": 9.34,
      "Open": 12227.7,
      "High": 12228.1,
      "Low": 12224,
      "Close": 12224.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.35.00",
      "TimeDecimal": 9.35,
      "Open": 12224.5,
      "High": 12225.25,
      "Low": 12223.3,
      "Close": 12224.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.36.00",
      "TimeDecimal": 9.36,
      "Open": 12223.5,
      "High": 12224.75,
      "Low": 12222.9,
      "Close": 12224.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.37.00",
      "TimeDecimal": 9.37,
      "Open": 12223.7,
      "High": 12224.55,
      "Low": 12222.45,
      "Close": 12224.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.38.00",
      "TimeDecimal": 9.38,
      "Open": 12224.25,
      "High": 12224.85,
      "Low": 12219.45,
      "Close": 12219.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.39.00",
      "TimeDecimal": 9.39,
      "Open": 12219.75,
      "High": 12219.8,
      "Low": 12216.25,
      "Close": 12216.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.40.00",
      "TimeDecimal": 9.4,
      "Open": 12217,
      "High": 12217.45,
      "Low": 12213.7,
      "Close": 12217.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.41.00",
      "TimeDecimal": 9.41,
      "Open": 12216.95,
      "High": 12218.25,
      "Low": 12216.15,
      "Close": 12217.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.42.00",
      "TimeDecimal": 9.42,
      "Open": 12216.85,
      "High": 12218.1,
      "Low": 12215.35,
      "Close": 12218
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.43.00",
      "TimeDecimal": 9.43,
      "Open": 12218.15,
      "High": 12220.1,
      "Low": 12217.1,
      "Close": 12217.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.44.00",
      "TimeDecimal": 9.44,
      "Open": 12217.3,
      "High": 12217.6,
      "Low": 12215.05,
      "Close": 12215.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.45.00",
      "TimeDecimal": 9.45,
      "Open": 12215.9,
      "High": 12216.05,
      "Low": 12213.3,
      "Close": 12214
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.46.00",
      "TimeDecimal": 9.46,
      "Open": 12213.7,
      "High": 12214.1,
      "Low": 12206.25,
      "Close": 12206.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.47.00",
      "TimeDecimal": 9.47,
      "Open": 12206.15,
      "High": 12210,
      "Low": 12205.6,
      "Close": 12210
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.48.00",
      "TimeDecimal": 9.48,
      "Open": 12210.4,
      "High": 12210.4,
      "Low": 12208.1,
      "Close": 12209.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.49.00",
      "TimeDecimal": 9.49,
      "Open": 12209.25,
      "High": 12210.5,
      "Low": 12208.55,
      "Close": 12209.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.50.00",
      "TimeDecimal": 9.5,
      "Open": 12210.05,
      "High": 12210.65,
      "Low": 12207.05,
      "Close": 12210.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.51.00",
      "TimeDecimal": 9.51,
      "Open": 12210.1,
      "High": 12211.5,
      "Low": 12208,
      "Close": 12211.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.52.00",
      "TimeDecimal": 9.52,
      "Open": 12211.15,
      "High": 12212.25,
      "Low": 12209.8,
      "Close": 12210.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.53.00",
      "TimeDecimal": 9.53,
      "Open": 12210.65,
      "High": 12212.35,
      "Low": 12210.1,
      "Close": 12212.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.54.00",
      "TimeDecimal": 9.54,
      "Open": 12212.6,
      "High": 12212.85,
      "Low": 12207.95,
      "Close": 12208.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.55.00",
      "TimeDecimal": 9.55,
      "Open": 12208.4,
      "High": 12208.6,
      "Low": 12204.35,
      "Close": 12204.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.56.00",
      "TimeDecimal": 9.56,
      "Open": 12204.7,
      "High": 12207.65,
      "Low": 12204.3,
      "Close": 12207
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.57.00",
      "TimeDecimal": 9.57,
      "Open": 12207.5,
      "High": 12208.35,
      "Low": 12206.4,
      "Close": 12207.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.58.00",
      "TimeDecimal": 9.58,
      "Open": 12207.5,
      "High": 12208.65,
      "Low": 12206.45,
      "Close": 12208.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "09.59.00",
      "TimeDecimal": 9.59,
      "Open": 12208.45,
      "High": 12212.1,
      "Low": 12207.95,
      "Close": 12212.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.00.00",
      "TimeDecimal": 10,
      "Open": 12212.25,
      "High": 12212.3,
      "Low": 12211.15,
      "Close": 12211.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.01.00",
      "TimeDecimal": 10.01,
      "Open": 12212.1,
      "High": 12215.7,
      "Low": 12211.5,
      "Close": 12215
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.02.00",
      "TimeDecimal": 10.02,
      "Open": 12215.75,
      "High": 12215.95,
      "Low": 12214.05,
      "Close": 12215.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.03.00",
      "TimeDecimal": 10.03,
      "Open": 12216.05,
      "High": 12217.15,
      "Low": 12215.25,
      "Close": 12216.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.04.00",
      "TimeDecimal": 10.04,
      "Open": 12216.6,
      "High": 12217.65,
      "Low": 12216.4,
      "Close": 12217
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.05.00",
      "TimeDecimal": 10.05,
      "Open": 12216.85,
      "High": 12217.8,
      "Low": 12215.4,
      "Close": 12217.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.06.00",
      "TimeDecimal": 10.06,
      "Open": 12217.6,
      "High": 12218.6,
      "Low": 12216.95,
      "Close": 12216.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.07.00",
      "TimeDecimal": 10.07,
      "Open": 12217.05,
      "High": 12218.1,
      "Low": 12216.9,
      "Close": 12217.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.08.00",
      "TimeDecimal": 10.08,
      "Open": 12218,
      "High": 12219.1,
      "Low": 12217.6,
      "Close": 12218.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.09.00",
      "TimeDecimal": 10.09,
      "Open": 12218.75,
      "High": 12218.85,
      "Low": 12216.6,
      "Close": 12216.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.10.00",
      "TimeDecimal": 10.1,
      "Open": 12217.05,
      "High": 12217.05,
      "Low": 12215,
      "Close": 12216
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.11.00",
      "TimeDecimal": 10.11,
      "Open": 12216.65,
      "High": 12217.45,
      "Low": 12213.4,
      "Close": 12213.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.12.00",
      "TimeDecimal": 10.12,
      "Open": 12214.25,
      "High": 12216.2,
      "Low": 12213.9,
      "Close": 12216.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.13.00",
      "TimeDecimal": 10.13,
      "Open": 12216.2,
      "High": 12216.9,
      "Low": 12215.5,
      "Close": 12216.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.14.00",
      "TimeDecimal": 10.14,
      "Open": 12216.4,
      "High": 12219.3,
      "Low": 12216.4,
      "Close": 12219.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.15.00",
      "TimeDecimal": 10.15,
      "Open": 12219.35,
      "High": 12220.1,
      "Low": 12218.4,
      "Close": 12220.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.16.00",
      "TimeDecimal": 10.16,
      "Open": 12219.6,
      "High": 12221.8,
      "Low": 12218.6,
      "Close": 12221
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.17.00",
      "TimeDecimal": 10.17,
      "Open": 12220.5,
      "High": 12221.15,
      "Low": 12219.5,
      "Close": 12219.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.18.00",
      "TimeDecimal": 10.18,
      "Open": 12220.5,
      "High": 12225.05,
      "Low": 12220.3,
      "Close": 12224.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.19.00",
      "TimeDecimal": 10.19,
      "Open": 12224.25,
      "High": 12226.65,
      "Low": 12223.3,
      "Close": 12226.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.20.00",
      "TimeDecimal": 10.2,
      "Open": 12225.8,
      "High": 12228,
      "Low": 12225.8,
      "Close": 12227.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.21.00",
      "TimeDecimal": 10.21,
      "Open": 12227.25,
      "High": 12228.6,
      "Low": 12226.8,
      "Close": 12227.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.22.00",
      "TimeDecimal": 10.22,
      "Open": 12227.4,
      "High": 12227.65,
      "Low": 12224.7,
      "Close": 12224.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.23.00",
      "TimeDecimal": 10.23,
      "Open": 12224.4,
      "High": 12225.75,
      "Low": 12223.75,
      "Close": 12224.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.24.00",
      "TimeDecimal": 10.24,
      "Open": 12223.95,
      "High": 12224,
      "Low": 12221.85,
      "Close": 12222.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.25.00",
      "TimeDecimal": 10.25,
      "Open": 12223.05,
      "High": 12224.85,
      "Low": 12222.6,
      "Close": 12223.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.26.00",
      "TimeDecimal": 10.26,
      "Open": 12224,
      "High": 12224.15,
      "Low": 12222.8,
      "Close": 12223.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.27.00",
      "TimeDecimal": 10.27,
      "Open": 12223.55,
      "High": 12224.2,
      "Low": 12222.75,
      "Close": 12223.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.28.00",
      "TimeDecimal": 10.28,
      "Open": 12222.95,
      "High": 12223.75,
      "Low": 12222.4,
      "Close": 12223.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.29.00",
      "TimeDecimal": 10.29,
      "Open": 12223.45,
      "High": 12225.1,
      "Low": 12223.35,
      "Close": 12224.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.30.00",
      "TimeDecimal": 10.3,
      "Open": 12225.3,
      "High": 12226.15,
      "Low": 12224.75,
      "Close": 12225.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.31.00",
      "TimeDecimal": 10.31,
      "Open": 12225.25,
      "High": 12227.85,
      "Low": 12225.25,
      "Close": 12227.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.32.00",
      "TimeDecimal": 10.32,
      "Open": 12227.2,
      "High": 12230.15,
      "Low": 12226.65,
      "Close": 12230.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.33.00",
      "TimeDecimal": 10.33,
      "Open": 12230.25,
      "High": 12230.3,
      "Low": 12229.05,
      "Close": 12229.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.34.00",
      "TimeDecimal": 10.34,
      "Open": 12229.6,
      "High": 12232.35,
      "Low": 12229.3,
      "Close": 12232
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.35.00",
      "TimeDecimal": 10.35,
      "Open": 12231.8,
      "High": 12232.75,
      "Low": 12230.4,
      "Close": 12230.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.36.00",
      "TimeDecimal": 10.36,
      "Open": 12231.15,
      "High": 12231.95,
      "Low": 12230.6,
      "Close": 12230.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.37.00",
      "TimeDecimal": 10.37,
      "Open": 12231,
      "High": 12231.85,
      "Low": 12230.45,
      "Close": 12231.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.38.00",
      "TimeDecimal": 10.38,
      "Open": 12231.45,
      "High": 12232.9,
      "Low": 12231.4,
      "Close": 12232.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.39.00",
      "TimeDecimal": 10.39,
      "Open": 12232.35,
      "High": 12235.5,
      "Low": 12232.35,
      "Close": 12233.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.40.00",
      "TimeDecimal": 10.4,
      "Open": 12233.4,
      "High": 12235.15,
      "Low": 12232.55,
      "Close": 12234.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.41.00",
      "TimeDecimal": 10.41,
      "Open": 12234.7,
      "High": 12235.1,
      "Low": 12232.2,
      "Close": 12232.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.42.00",
      "TimeDecimal": 10.42,
      "Open": 12232.65,
      "High": 12232.65,
      "Low": 12230.35,
      "Close": 12231.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.43.00",
      "TimeDecimal": 10.43,
      "Open": 12231.45,
      "High": 12233.25,
      "Low": 12231.3,
      "Close": 12232.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.44.00",
      "TimeDecimal": 10.44,
      "Open": 12232.15,
      "High": 12233.9,
      "Low": 12231.65,
      "Close": 12233.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.45.00",
      "TimeDecimal": 10.45,
      "Open": 12233.55,
      "High": 12234.2,
      "Low": 12231.8,
      "Close": 12233
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.46.00",
      "TimeDecimal": 10.46,
      "Open": 12233.4,
      "High": 12234.3,
      "Low": 12232.35,
      "Close": 12232.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.47.00",
      "TimeDecimal": 10.47,
      "Open": 12232.4,
      "High": 12232.55,
      "Low": 12230.3,
      "Close": 12231.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.48.00",
      "TimeDecimal": 10.48,
      "Open": 12231.6,
      "High": 12233.7,
      "Low": 12231.4,
      "Close": 12232.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.49.00",
      "TimeDecimal": 10.49,
      "Open": 12232.7,
      "High": 12233.6,
      "Low": 12231.85,
      "Close": 12232.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.50.00",
      "TimeDecimal": 10.5,
      "Open": 12232.1,
      "High": 12233.15,
      "Low": 12231.45,
      "Close": 12232.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.51.00",
      "TimeDecimal": 10.51,
      "Open": 12232.75,
      "High": 12234.75,
      "Low": 12232.2,
      "Close": 12234.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.52.00",
      "TimeDecimal": 10.52,
      "Open": 12234.85,
      "High": 12236.35,
      "Low": 12234.05,
      "Close": 12235.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.53.00",
      "TimeDecimal": 10.53,
      "Open": 12235.9,
      "High": 12235.95,
      "Low": 12232.3,
      "Close": 12233.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.54.00",
      "TimeDecimal": 10.54,
      "Open": 12232.85,
      "High": 12233.85,
      "Low": 12232.1,
      "Close": 12233.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.55.00",
      "TimeDecimal": 10.55,
      "Open": 12233.05,
      "High": 12234.7,
      "Low": 12232.95,
      "Close": 12233.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.56.00",
      "TimeDecimal": 10.56,
      "Open": 12233.8,
      "High": 12234.5,
      "Low": 12232.65,
      "Close": 12234.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.57.00",
      "TimeDecimal": 10.57,
      "Open": 12233.6,
      "High": 12234,
      "Low": 12230.7,
      "Close": 12230.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.58.00",
      "TimeDecimal": 10.58,
      "Open": 12230.6,
      "High": 12231.6,
      "Low": 12229.25,
      "Close": 12231.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "10.59.00",
      "TimeDecimal": 10.59,
      "Open": 12231.05,
      "High": 12231.9,
      "Low": 12228.8,
      "Close": 12230.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.00.00",
      "TimeDecimal": 11,
      "Open": 12230.15,
      "High": 12230.85,
      "Low": 12229.05,
      "Close": 12229.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.01.00",
      "TimeDecimal": 11.01,
      "Open": 12229.6,
      "High": 12231.5,
      "Low": 12229.15,
      "Close": 12231.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.02.00",
      "TimeDecimal": 11.02,
      "Open": 12231.55,
      "High": 12231.55,
      "Low": 12229.35,
      "Close": 12229.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.03.00",
      "TimeDecimal": 11.03,
      "Open": 12229.3,
      "High": 12231.15,
      "Low": 12229.3,
      "Close": 12230.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.04.00",
      "TimeDecimal": 11.04,
      "Open": 12230.35,
      "High": 12231.45,
      "Low": 12229.6,
      "Close": 12230.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.05.00",
      "TimeDecimal": 11.05,
      "Open": 12230.1,
      "High": 12230.55,
      "Low": 12228.85,
      "Close": 12229.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.06.00",
      "TimeDecimal": 11.06,
      "Open": 12229.3,
      "High": 12229.65,
      "Low": 12227.7,
      "Close": 12228.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.07.00",
      "TimeDecimal": 11.07,
      "Open": 12228,
      "High": 12229.9,
      "Low": 12227.5,
      "Close": 12228.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.08.00",
      "TimeDecimal": 11.08,
      "Open": 12228,
      "High": 12229.4,
      "Low": 12226.85,
      "Close": 12229.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.09.00",
      "TimeDecimal": 11.09,
      "Open": 12229.1,
      "High": 12230.8,
      "Low": 12228.9,
      "Close": 12230.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.10.00",
      "TimeDecimal": 11.1,
      "Open": 12230.6,
      "High": 12232.15,
      "Low": 12230.05,
      "Close": 12232.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.11.00",
      "TimeDecimal": 11.11,
      "Open": 12231.95,
      "High": 12232.25,
      "Low": 12230.45,
      "Close": 12230.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.12.00",
      "TimeDecimal": 11.12,
      "Open": 12230.7,
      "High": 12231.6,
      "Low": 12229.65,
      "Close": 12231.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.13.00",
      "TimeDecimal": 11.13,
      "Open": 12231,
      "High": 12231.6,
      "Low": 12229.4,
      "Close": 12229.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.14.00",
      "TimeDecimal": 11.14,
      "Open": 12230.05,
      "High": 12230.05,
      "Low": 12227.7,
      "Close": 12227.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.15.00",
      "TimeDecimal": 11.15,
      "Open": 12228.05,
      "High": 12229.35,
      "Low": 12227.45,
      "Close": 12228.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.16.00",
      "TimeDecimal": 11.16,
      "Open": 12228.45,
      "High": 12229.9,
      "Low": 12228.05,
      "Close": 12229.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.17.00",
      "TimeDecimal": 11.17,
      "Open": 12229.5,
      "High": 12233.05,
      "Low": 12229.1,
      "Close": 12232.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.18.00",
      "TimeDecimal": 11.18,
      "Open": 12233,
      "High": 12235.2,
      "Low": 12232.85,
      "Close": 12234.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.19.00",
      "TimeDecimal": 11.19,
      "Open": 12234.95,
      "High": 12235.65,
      "Low": 12233.75,
      "Close": 12234.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.20.00",
      "TimeDecimal": 11.2,
      "Open": 12234.55,
      "High": 12235.15,
      "Low": 12233.25,
      "Close": 12234.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.21.00",
      "TimeDecimal": 11.21,
      "Open": 12234.75,
      "High": 12237.2,
      "Low": 12234.75,
      "Close": 12236.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.22.00",
      "TimeDecimal": 11.22,
      "Open": 12236.8,
      "High": 12238.25,
      "Low": 12236.55,
      "Close": 12237.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.23.00",
      "TimeDecimal": 11.23,
      "Open": 12238.05,
      "High": 12238.35,
      "Low": 12236.8,
      "Close": 12237.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.24.00",
      "TimeDecimal": 11.24,
      "Open": 12238.3,
      "High": 12239.3,
      "Low": 12237.05,
      "Close": 12238.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.25.00",
      "TimeDecimal": 11.25,
      "Open": 12237.95,
      "High": 12242.7,
      "Low": 12237.55,
      "Close": 12242.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.26.00",
      "TimeDecimal": 11.26,
      "Open": 12241.85,
      "High": 12241.85,
      "Low": 12238.95,
      "Close": 12239.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.27.00",
      "TimeDecimal": 11.27,
      "Open": 12239.45,
      "High": 12240.55,
      "Low": 12239.3,
      "Close": 12240.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.28.00",
      "TimeDecimal": 11.28,
      "Open": 12240.75,
      "High": 12241.15,
      "Low": 12239.85,
      "Close": 12241.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.29.00",
      "TimeDecimal": 11.29,
      "Open": 12240.7,
      "High": 12240.85,
      "Low": 12238.65,
      "Close": 12239.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.30.00",
      "TimeDecimal": 11.3,
      "Open": 12239.25,
      "High": 12239.25,
      "Low": 12236.8,
      "Close": 12237.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.31.00",
      "TimeDecimal": 11.31,
      "Open": 12237.7,
      "High": 12238.4,
      "Low": 12237.05,
      "Close": 12237.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.32.00",
      "TimeDecimal": 11.32,
      "Open": 12237.6,
      "High": 12238.65,
      "Low": 12237.3,
      "Close": 12238.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.33.00",
      "TimeDecimal": 11.33,
      "Open": 12238.55,
      "High": 12240.35,
      "Low": 12238.2,
      "Close": 12239.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.34.00",
      "TimeDecimal": 11.34,
      "Open": 12239.7,
      "High": 12240.25,
      "Low": 12238.8,
      "Close": 12240
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.35.00",
      "TimeDecimal": 11.35,
      "Open": 12240.05,
      "High": 12242.75,
      "Low": 12239.8,
      "Close": 12242.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.36.00",
      "TimeDecimal": 11.36,
      "Open": 12242.65,
      "High": 12245.15,
      "Low": 12242.25,
      "Close": 12244.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.37.00",
      "TimeDecimal": 11.37,
      "Open": 12244.75,
      "High": 12244.75,
      "Low": 12241.2,
      "Close": 12241.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.38.00",
      "TimeDecimal": 11.38,
      "Open": 12241.25,
      "High": 12242.4,
      "Low": 12240.55,
      "Close": 12242.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.39.00",
      "TimeDecimal": 11.39,
      "Open": 12241.8,
      "High": 12241.8,
      "Low": 12239.85,
      "Close": 12239.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.40.00",
      "TimeDecimal": 11.4,
      "Open": 12239.85,
      "High": 12239.85,
      "Low": 12237.85,
      "Close": 12238.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.41.00",
      "TimeDecimal": 11.41,
      "Open": 12239.15,
      "High": 12240.5,
      "Low": 12238.4,
      "Close": 12238.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.42.00",
      "TimeDecimal": 11.42,
      "Open": 12239.55,
      "High": 12242.2,
      "Low": 12238.95,
      "Close": 12241.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.43.00",
      "TimeDecimal": 11.43,
      "Open": 12242.25,
      "High": 12242.8,
      "Low": 12241.4,
      "Close": 12241.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.44.00",
      "TimeDecimal": 11.44,
      "Open": 12241.85,
      "High": 12242.95,
      "Low": 12241.45,
      "Close": 12242.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.45.00",
      "TimeDecimal": 11.45,
      "Open": 12242.7,
      "High": 12244.9,
      "Low": 12242.35,
      "Close": 12243.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.46.00",
      "TimeDecimal": 11.46,
      "Open": 12243.95,
      "High": 12246,
      "Low": 12243.9,
      "Close": 12245.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.47.00",
      "TimeDecimal": 11.47,
      "Open": 12245.3,
      "High": 12246.5,
      "Low": 12244.75,
      "Close": 12246.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.48.00",
      "TimeDecimal": 11.48,
      "Open": 12246.05,
      "High": 12246.55,
      "Low": 12245.4,
      "Close": 12245.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.49.00",
      "TimeDecimal": 11.49,
      "Open": 12245.85,
      "High": 12247.05,
      "Low": 12245.25,
      "Close": 12245.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.50.00",
      "TimeDecimal": 11.5,
      "Open": 12245.4,
      "High": 12245.8,
      "Low": 12243.95,
      "Close": 12244.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.51.00",
      "TimeDecimal": 11.51,
      "Open": 12244.25,
      "High": 12246.6,
      "Low": 12244.15,
      "Close": 12246.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.52.00",
      "TimeDecimal": 11.52,
      "Open": 12246.05,
      "High": 12247,
      "Low": 12245.45,
      "Close": 12246.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.53.00",
      "TimeDecimal": 11.53,
      "Open": 12246.5,
      "High": 12248.45,
      "Low": 12246.25,
      "Close": 12247.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.54.00",
      "TimeDecimal": 11.54,
      "Open": 12247.4,
      "High": 12248.25,
      "Low": 12246.75,
      "Close": 12247.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.55.00",
      "TimeDecimal": 11.55,
      "Open": 12248,
      "High": 12251.55,
      "Low": 12247.45,
      "Close": 12251.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.56.00",
      "TimeDecimal": 11.56,
      "Open": 12251.15,
      "High": 12251.3,
      "Low": 12249.45,
      "Close": 12250.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.57.00",
      "TimeDecimal": 11.57,
      "Open": 12250,
      "High": 12250.7,
      "Low": 12248.95,
      "Close": 12249.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.58.00",
      "TimeDecimal": 11.58,
      "Open": 12248.95,
      "High": 12249.25,
      "Low": 12247.7,
      "Close": 12248.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "11.59.00",
      "TimeDecimal": 11.59,
      "Open": 12248.3,
      "High": 12248.3,
      "Low": 12246.05,
      "Close": 12247.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.00.00",
      "TimeDecimal": 12,
      "Open": 12247.05,
      "High": 12249.2,
      "Low": 12246.95,
      "Close": 12248.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.01.00",
      "TimeDecimal": 12.01,
      "Open": 12249,
      "High": 12250.05,
      "Low": 12248.6,
      "Close": 12249.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.02.00",
      "TimeDecimal": 12.02,
      "Open": 12249.7,
      "High": 12250.4,
      "Low": 12248.7,
      "Close": 12249
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.03.00",
      "TimeDecimal": 12.03,
      "Open": 12248.95,
      "High": 12249.55,
      "Low": 12246.6,
      "Close": 12248.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.04.00",
      "TimeDecimal": 12.04,
      "Open": 12248.5,
      "High": 12248.8,
      "Low": 12247.05,
      "Close": 12248.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.05.00",
      "TimeDecimal": 12.05,
      "Open": 12247.9,
      "High": 12248.05,
      "Low": 12246.8,
      "Close": 12247.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.06.00",
      "TimeDecimal": 12.06,
      "Open": 12248.25,
      "High": 12249.6,
      "Low": 12247.65,
      "Close": 12248.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.07.00",
      "TimeDecimal": 12.07,
      "Open": 12248.5,
      "High": 12248.9,
      "Low": 12247.2,
      "Close": 12247.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.08.00",
      "TimeDecimal": 12.08,
      "Open": 12247.75,
      "High": 12249,
      "Low": 12247.25,
      "Close": 12248.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.09.00",
      "TimeDecimal": 12.09,
      "Open": 12248.65,
      "High": 12250.4,
      "Low": 12248.3,
      "Close": 12249.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.10.00",
      "TimeDecimal": 12.1,
      "Open": 12249.8,
      "High": 12254.45,
      "Low": 12249.6,
      "Close": 12254.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.11.00",
      "TimeDecimal": 12.11,
      "Open": 12254.05,
      "High": 12254.85,
      "Low": 12252.05,
      "Close": 12252.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.12.00",
      "TimeDecimal": 12.12,
      "Open": 12252.85,
      "High": 12253.65,
      "Low": 12251.65,
      "Close": 12252.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.13.00",
      "TimeDecimal": 12.13,
      "Open": 12252.5,
      "High": 12255.05,
      "Low": 12252.45,
      "Close": 12254.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.14.00",
      "TimeDecimal": 12.14,
      "Open": 12253.7,
      "High": 12257.1,
      "Low": 12253.7,
      "Close": 12256.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.15.00",
      "TimeDecimal": 12.15,
      "Open": 12256.35,
      "High": 12257.55,
      "Low": 12254.95,
      "Close": 12256.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.16.00",
      "TimeDecimal": 12.16,
      "Open": 12256.05,
      "High": 12259.35,
      "Low": 12255.9,
      "Close": 12258.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.17.00",
      "TimeDecimal": 12.17,
      "Open": 12257.7,
      "High": 12261.25,
      "Low": 12257.7,
      "Close": 12259.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.18.00",
      "TimeDecimal": 12.18,
      "Open": 12259.55,
      "High": 12260.5,
      "Low": 12258.8,
      "Close": 12259.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.19.00",
      "TimeDecimal": 12.19,
      "Open": 12259.3,
      "High": 12262.15,
      "Low": 12259.3,
      "Close": 12260.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.20.00",
      "TimeDecimal": 12.2,
      "Open": 12260.3,
      "High": 12261.15,
      "Low": 12259.1,
      "Close": 12260.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.21.00",
      "TimeDecimal": 12.21,
      "Open": 12260.6,
      "High": 12260.9,
      "Low": 12258.55,
      "Close": 12260.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.22.00",
      "TimeDecimal": 12.22,
      "Open": 12259.25,
      "High": 12260.65,
      "Low": 12258.45,
      "Close": 12259.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.23.00",
      "TimeDecimal": 12.23,
      "Open": 12259.75,
      "High": 12261.3,
      "Low": 12258.25,
      "Close": 12261.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.24.00",
      "TimeDecimal": 12.24,
      "Open": 12261.2,
      "High": 12264.25,
      "Low": 12261,
      "Close": 12262.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.25.00",
      "TimeDecimal": 12.25,
      "Open": 12262.8,
      "High": 12264.5,
      "Low": 12262.1,
      "Close": 12263.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.26.00",
      "TimeDecimal": 12.26,
      "Open": 12263.7,
      "High": 12265.1,
      "Low": 12262.75,
      "Close": 12263.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.27.00",
      "TimeDecimal": 12.27,
      "Open": 12263.65,
      "High": 12264.05,
      "Low": 12260.75,
      "Close": 12261.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.28.00",
      "TimeDecimal": 12.28,
      "Open": 12262,
      "High": 12262.35,
      "Low": 12260.4,
      "Close": 12261.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.29.00",
      "TimeDecimal": 12.29,
      "Open": 12261.35,
      "High": 12262.15,
      "Low": 12260.45,
      "Close": 12261.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.30.00",
      "TimeDecimal": 12.3,
      "Open": 12260.85,
      "High": 12262,
      "Low": 12260.4,
      "Close": 12262
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.31.00",
      "TimeDecimal": 12.31,
      "Open": 12261.95,
      "High": 12265.3,
      "Low": 12261.95,
      "Close": 12264.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.32.00",
      "TimeDecimal": 12.32,
      "Open": 12264.2,
      "High": 12265.45,
      "Low": 12262.85,
      "Close": 12264.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.33.00",
      "TimeDecimal": 12.33,
      "Open": 12263.8,
      "High": 12264.65,
      "Low": 12263.35,
      "Close": 12263.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.34.00",
      "TimeDecimal": 12.34,
      "Open": 12263.15,
      "High": 12266.65,
      "Low": 12263.15,
      "Close": 12265.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.35.00",
      "TimeDecimal": 12.35,
      "Open": 12265.45,
      "High": 12267.1,
      "Low": 12265.2,
      "Close": 12266.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.36.00",
      "TimeDecimal": 12.36,
      "Open": 12266.3,
      "High": 12268.9,
      "Low": 12265.55,
      "Close": 12267.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.37.00",
      "TimeDecimal": 12.37,
      "Open": 12267.3,
      "High": 12270.3,
      "Low": 12267.3,
      "Close": 12268.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.38.00",
      "TimeDecimal": 12.38,
      "Open": 12268.3,
      "High": 12269.5,
      "Low": 12267.65,
      "Close": 12268.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.39.00",
      "TimeDecimal": 12.39,
      "Open": 12268.4,
      "High": 12268.8,
      "Low": 12266.05,
      "Close": 12266.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.40.00",
      "TimeDecimal": 12.4,
      "Open": 12266.65,
      "High": 12267.5,
      "Low": 12265.6,
      "Close": 12266.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.41.00",
      "TimeDecimal": 12.41,
      "Open": 12266.5,
      "High": 12267.95,
      "Low": 12265.95,
      "Close": 12267.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.42.00",
      "TimeDecimal": 12.42,
      "Open": 12267.9,
      "High": 12268.15,
      "Low": 12266.15,
      "Close": 12266.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.43.00",
      "TimeDecimal": 12.43,
      "Open": 12266.7,
      "High": 12267.95,
      "Low": 12265.8,
      "Close": 12265.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.44.00",
      "TimeDecimal": 12.44,
      "Open": 12265.3,
      "High": 12267.5,
      "Low": 12265.3,
      "Close": 12267.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.45.00",
      "TimeDecimal": 12.45,
      "Open": 12266.8,
      "High": 12267.9,
      "Low": 12266.05,
      "Close": 12266.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.46.00",
      "TimeDecimal": 12.46,
      "Open": 12265.95,
      "High": 12266.5,
      "Low": 12256.3,
      "Close": 12256.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.47.00",
      "TimeDecimal": 12.47,
      "Open": 12256.25,
      "High": 12258.3,
      "Low": 12254.35,
      "Close": 12256.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.48.00",
      "TimeDecimal": 12.48,
      "Open": 12256.6,
      "High": 12256.95,
      "Low": 12252.8,
      "Close": 12253.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.49.00",
      "TimeDecimal": 12.49,
      "Open": 12252.75,
      "High": 12255.2,
      "Low": 12251.75,
      "Close": 12254.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.50.00",
      "TimeDecimal": 12.5,
      "Open": 12253.8,
      "High": 12254.25,
      "Low": 12252.6,
      "Close": 12253.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.51.00",
      "TimeDecimal": 12.51,
      "Open": 12253.5,
      "High": 12254.05,
      "Low": 12252.8,
      "Close": 12253.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.52.00",
      "TimeDecimal": 12.52,
      "Open": 12254.1,
      "High": 12255.85,
      "Low": 12254,
      "Close": 12254.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.53.00",
      "TimeDecimal": 12.53,
      "Open": 12255.55,
      "High": 12255.55,
      "Low": 12252.95,
      "Close": 12253.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.54.00",
      "TimeDecimal": 12.54,
      "Open": 12253.65,
      "High": 12254.15,
      "Low": 12252.05,
      "Close": 12252.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.55.00",
      "TimeDecimal": 12.55,
      "Open": 12252.7,
      "High": 12254.95,
      "Low": 12252.7,
      "Close": 12254.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.56.00",
      "TimeDecimal": 12.56,
      "Open": 12254.75,
      "High": 12255.05,
      "Low": 12253.15,
      "Close": 12253.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.57.00",
      "TimeDecimal": 12.57,
      "Open": 12253.4,
      "High": 12253.95,
      "Low": 12252.2,
      "Close": 12252.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.58.00",
      "TimeDecimal": 12.58,
      "Open": 12252.15,
      "High": 12252.35,
      "Low": 12250.7,
      "Close": 12252
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "12.59.00",
      "TimeDecimal": 12.59,
      "Open": 12252.05,
      "High": 12252.45,
      "Low": 12250.5,
      "Close": 12250.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.00.00",
      "TimeDecimal": 13,
      "Open": 12251,
      "High": 12252.15,
      "Low": 12250.85,
      "Close": 12251.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.01.00",
      "TimeDecimal": 13.01,
      "Open": 12251.45,
      "High": 12253.4,
      "Low": 12251.35,
      "Close": 12253.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.02.00",
      "TimeDecimal": 13.02,
      "Open": 12253.05,
      "High": 12255.65,
      "Low": 12252.65,
      "Close": 12255.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.03.00",
      "TimeDecimal": 13.03,
      "Open": 12255.25,
      "High": 12257.15,
      "Low": 12254.9,
      "Close": 12256.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.04.00",
      "TimeDecimal": 13.04,
      "Open": 12256.4,
      "High": 12257.8,
      "Low": 12256.1,
      "Close": 12257.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.05.00",
      "TimeDecimal": 13.05,
      "Open": 12257.7,
      "High": 12258.55,
      "Low": 12256.4,
      "Close": 12258.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.06.00",
      "TimeDecimal": 13.06,
      "Open": 12258.4,
      "High": 12259.4,
      "Low": 12257.55,
      "Close": 12257.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.07.00",
      "TimeDecimal": 13.07,
      "Open": 12257.15,
      "High": 12257.95,
      "Low": 12255.95,
      "Close": 12256.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.08.00",
      "TimeDecimal": 13.08,
      "Open": 12256.2,
      "High": 12258.6,
      "Low": 12255.6,
      "Close": 12258.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.09.00",
      "TimeDecimal": 13.09,
      "Open": 12257.95,
      "High": 12258.95,
      "Low": 12257.55,
      "Close": 12258.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.10.00",
      "TimeDecimal": 13.1,
      "Open": 12258.4,
      "High": 12260.05,
      "Low": 12258.4,
      "Close": 12259.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.11.00",
      "TimeDecimal": 13.11,
      "Open": 12259.4,
      "High": 12260.85,
      "Low": 12259.05,
      "Close": 12260.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.12.00",
      "TimeDecimal": 13.12,
      "Open": 12260.75,
      "High": 12260.75,
      "Low": 12257.15,
      "Close": 12257.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.13.00",
      "TimeDecimal": 13.13,
      "Open": 12257.35,
      "High": 12258.7,
      "Low": 12257.15,
      "Close": 12257.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.14.00",
      "TimeDecimal": 13.14,
      "Open": 12257.5,
      "High": 12259,
      "Low": 12257.5,
      "Close": 12258.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.15.00",
      "TimeDecimal": 13.15,
      "Open": 12258.5,
      "High": 12259.7,
      "Low": 12258.5,
      "Close": 12258.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.16.00",
      "TimeDecimal": 13.16,
      "Open": 12258.45,
      "High": 12259.25,
      "Low": 12257.55,
      "Close": 12258.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.17.00",
      "TimeDecimal": 13.17,
      "Open": 12258,
      "High": 12258.65,
      "Low": 12257,
      "Close": 12257.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.18.00",
      "TimeDecimal": 13.18,
      "Open": 12257.35,
      "High": 12259.25,
      "Low": 12257.35,
      "Close": 12258.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.19.00",
      "TimeDecimal": 13.19,
      "Open": 12257.85,
      "High": 12259.8,
      "Low": 12257.75,
      "Close": 12258.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.20.00",
      "TimeDecimal": 13.2,
      "Open": 12258.9,
      "High": 12260.55,
      "Low": 12258.55,
      "Close": 12259.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.21.00",
      "TimeDecimal": 13.21,
      "Open": 12259.85,
      "High": 12260.5,
      "Low": 12258.8,
      "Close": 12260.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.22.00",
      "TimeDecimal": 13.22,
      "Open": 12260.15,
      "High": 12261.5,
      "Low": 12259.3,
      "Close": 12260
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.23.00",
      "TimeDecimal": 13.23,
      "Open": 12259.85,
      "High": 12261.6,
      "Low": 12259,
      "Close": 12261.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.24.00",
      "TimeDecimal": 13.24,
      "Open": 12261.6,
      "High": 12261.95,
      "Low": 12259.65,
      "Close": 12260.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.25.00",
      "TimeDecimal": 13.25,
      "Open": 12260.55,
      "High": 12263,
      "Low": 12260.45,
      "Close": 12262.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.26.00",
      "TimeDecimal": 13.26,
      "Open": 12262.6,
      "High": 12265.6,
      "Low": 12262.6,
      "Close": 12264.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.27.00",
      "TimeDecimal": 13.27,
      "Open": 12265.25,
      "High": 12265.25,
      "Low": 12263.45,
      "Close": 12263.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.28.00",
      "TimeDecimal": 13.28,
      "Open": 12263.95,
      "High": 12265.75,
      "Low": 12263.85,
      "Close": 12265.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.29.00",
      "TimeDecimal": 13.29,
      "Open": 12264.9,
      "High": 12267.15,
      "Low": 12264.9,
      "Close": 12265.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.30.00",
      "TimeDecimal": 13.3,
      "Open": 12265.25,
      "High": 12265.6,
      "Low": 12264.4,
      "Close": 12265.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.31.00",
      "TimeDecimal": 13.31,
      "Open": 12264.9,
      "High": 12265.5,
      "Low": 12260.75,
      "Close": 12260.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.32.00",
      "TimeDecimal": 13.32,
      "Open": 12260,
      "High": 12262.4,
      "Low": 12259.55,
      "Close": 12260.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.33.00",
      "TimeDecimal": 13.33,
      "Open": 12260.55,
      "High": 12261.8,
      "Low": 12259.4,
      "Close": 12259.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.34.00",
      "TimeDecimal": 13.34,
      "Open": 12259.15,
      "High": 12262.35,
      "Low": 12259.15,
      "Close": 12261.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.35.00",
      "TimeDecimal": 13.35,
      "Open": 12261,
      "High": 12263.75,
      "Low": 12260.8,
      "Close": 12262.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.36.00",
      "TimeDecimal": 13.36,
      "Open": 12262.75,
      "High": 12263.25,
      "Low": 12261.9,
      "Close": 12261.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.37.00",
      "TimeDecimal": 13.37,
      "Open": 12262.2,
      "High": 12264,
      "Low": 12261.8,
      "Close": 12261.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.38.00",
      "TimeDecimal": 13.38,
      "Open": 12262.1,
      "High": 12263.75,
      "Low": 12261.4,
      "Close": 12261.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.39.00",
      "TimeDecimal": 13.39,
      "Open": 12261.3,
      "High": 12263.35,
      "Low": 12261.25,
      "Close": 12261.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.40.00",
      "TimeDecimal": 13.4,
      "Open": 12261.95,
      "High": 12263.8,
      "Low": 12261.75,
      "Close": 12262.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.41.00",
      "TimeDecimal": 13.41,
      "Open": 12262.45,
      "High": 12263.8,
      "Low": 12261.2,
      "Close": 12261.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.42.00",
      "TimeDecimal": 13.42,
      "Open": 12262,
      "High": 12262.8,
      "Low": 12261.1,
      "Close": 12262.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.43.00",
      "TimeDecimal": 13.43,
      "Open": 12262.25,
      "High": 12263.5,
      "Low": 12262.15,
      "Close": 12262.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.44.00",
      "TimeDecimal": 13.44,
      "Open": 12262.4,
      "High": 12262.8,
      "Low": 12261.55,
      "Close": 12262.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.45.00",
      "TimeDecimal": 13.45,
      "Open": 12262.3,
      "High": 12262.35,
      "Low": 12258.75,
      "Close": 12259
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.46.00",
      "TimeDecimal": 13.46,
      "Open": 12259.55,
      "High": 12259.9,
      "Low": 12253.3,
      "Close": 12254.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.47.00",
      "TimeDecimal": 13.47,
      "Open": 12254.75,
      "High": 12257.95,
      "Low": 12254.55,
      "Close": 12257
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.48.00",
      "TimeDecimal": 13.48,
      "Open": 12257.45,
      "High": 12259.15,
      "Low": 12256.5,
      "Close": 12257.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.49.00",
      "TimeDecimal": 13.49,
      "Open": 12257.75,
      "High": 12260.9,
      "Low": 12257.75,
      "Close": 12259.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.50.00",
      "TimeDecimal": 13.5,
      "Open": 12259.7,
      "High": 12261.35,
      "Low": 12259.55,
      "Close": 12260.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.51.00",
      "TimeDecimal": 13.51,
      "Open": 12260.55,
      "High": 12261.15,
      "Low": 12259.9,
      "Close": 12260.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.52.00",
      "TimeDecimal": 13.52,
      "Open": 12260.8,
      "High": 12263.35,
      "Low": 12259.7,
      "Close": 12262.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.53.00",
      "TimeDecimal": 13.53,
      "Open": 12262.45,
      "High": 12263.65,
      "Low": 12261.95,
      "Close": 12262.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.54.00",
      "TimeDecimal": 13.54,
      "Open": 12263.05,
      "High": 12263.45,
      "Low": 12262.05,
      "Close": 12262.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.55.00",
      "TimeDecimal": 13.55,
      "Open": 12262.35,
      "High": 12263.3,
      "Low": 12261.5,
      "Close": 12262.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.56.00",
      "TimeDecimal": 13.56,
      "Open": 12262.6,
      "High": 12263.7,
      "Low": 12261.7,
      "Close": 12262.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.57.00",
      "TimeDecimal": 13.57,
      "Open": 12262.6,
      "High": 12263.6,
      "Low": 12262.25,
      "Close": 12262.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.58.00",
      "TimeDecimal": 13.58,
      "Open": 12262.95,
      "High": 12264.4,
      "Low": 12262.7,
      "Close": 12264.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "13.59.00",
      "TimeDecimal": 13.59,
      "Open": 12264.05,
      "High": 12265.3,
      "Low": 12263.85,
      "Close": 12264.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.00.00",
      "TimeDecimal": 14,
      "Open": 12264.85,
      "High": 12266.1,
      "Low": 12264.55,
      "Close": 12265.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.01.00",
      "TimeDecimal": 14.01,
      "Open": 12265.65,
      "High": 12266.8,
      "Low": 12265.35,
      "Close": 12265.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.02.00",
      "TimeDecimal": 14.02,
      "Open": 12266.05,
      "High": 12267.1,
      "Low": 12265.2,
      "Close": 12265.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.03.00",
      "TimeDecimal": 14.03,
      "Open": 12265.3,
      "High": 12266.8,
      "Low": 12265.05,
      "Close": 12265.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.04.00",
      "TimeDecimal": 14.04,
      "Open": 12265.9,
      "High": 12267.3,
      "Low": 12264.5,
      "Close": 12265.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.05.00",
      "TimeDecimal": 14.05,
      "Open": 12265.7,
      "High": 12266.35,
      "Low": 12264.95,
      "Close": 12266.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.06.00",
      "TimeDecimal": 14.06,
      "Open": 12266.75,
      "High": 12268,
      "Low": 12266.1,
      "Close": 12267.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.07.00",
      "TimeDecimal": 14.07,
      "Open": 12268,
      "High": 12268.75,
      "Low": 12267,
      "Close": 12268.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.08.00",
      "TimeDecimal": 14.08,
      "Open": 12268.4,
      "High": 12268.65,
      "Low": 12267.15,
      "Close": 12267.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.09.00",
      "TimeDecimal": 14.09,
      "Open": 12268.1,
      "High": 12268.15,
      "Low": 12266.25,
      "Close": 12267.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.10.00",
      "TimeDecimal": 14.1,
      "Open": 12267.55,
      "High": 12268.6,
      "Low": 12265.15,
      "Close": 12265.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.11.00",
      "TimeDecimal": 14.11,
      "Open": 12265.05,
      "High": 12265.95,
      "Low": 12264.2,
      "Close": 12265.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.12.00",
      "TimeDecimal": 14.12,
      "Open": 12265.65,
      "High": 12266.1,
      "Low": 12263.65,
      "Close": 12264.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.13.00",
      "TimeDecimal": 14.13,
      "Open": 12264.95,
      "High": 12265.7,
      "Low": 12261.4,
      "Close": 12261.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.14.00",
      "TimeDecimal": 14.14,
      "Open": 12261.8,
      "High": 12262.45,
      "Low": 12260.8,
      "Close": 12260.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.15.00",
      "TimeDecimal": 14.15,
      "Open": 12260.9,
      "High": 12263.2,
      "Low": 12260.25,
      "Close": 12262.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.16.00",
      "TimeDecimal": 14.16,
      "Open": 12262.7,
      "High": 12267.35,
      "Low": 12262.7,
      "Close": 12266.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.17.00",
      "TimeDecimal": 14.17,
      "Open": 12266.8,
      "High": 12269.95,
      "Low": 12266.8,
      "Close": 12268.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.18.00",
      "TimeDecimal": 14.18,
      "Open": 12268.65,
      "High": 12270.85,
      "Low": 12267.75,
      "Close": 12270.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.19.00",
      "TimeDecimal": 14.19,
      "Open": 12270.15,
      "High": 12270.6,
      "Low": 12268.6,
      "Close": 12270.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.20.00",
      "TimeDecimal": 14.2,
      "Open": 12269.65,
      "High": 12269.65,
      "Low": 12267.8,
      "Close": 12267.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.21.00",
      "TimeDecimal": 14.21,
      "Open": 12268.2,
      "High": 12268.45,
      "Low": 12266.45,
      "Close": 12267.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.22.00",
      "TimeDecimal": 14.22,
      "Open": 12267.1,
      "High": 12270.6,
      "Low": 12267.1,
      "Close": 12269.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.23.00",
      "TimeDecimal": 14.23,
      "Open": 12269.9,
      "High": 12272.65,
      "Low": 12269.45,
      "Close": 12271.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.24.00",
      "TimeDecimal": 14.24,
      "Open": 12271.75,
      "High": 12273.25,
      "Low": 12271.4,
      "Close": 12272.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.25.00",
      "TimeDecimal": 14.25,
      "Open": 12272.45,
      "High": 12272.45,
      "Low": 12270.65,
      "Close": 12270.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.26.00",
      "TimeDecimal": 14.26,
      "Open": 12270.5,
      "High": 12272.25,
      "Low": 12270.35,
      "Close": 12272.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.27.00",
      "TimeDecimal": 14.27,
      "Open": 12272.05,
      "High": 12272.4,
      "Low": 12270.05,
      "Close": 12271.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.28.00",
      "TimeDecimal": 14.28,
      "Open": 12271.6,
      "High": 12272.05,
      "Low": 12266.7,
      "Close": 12267.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.29.00",
      "TimeDecimal": 14.29,
      "Open": 12266.9,
      "High": 12268.1,
      "Low": 12265.35,
      "Close": 12267.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.30.00",
      "TimeDecimal": 14.3,
      "Open": 12267.9,
      "High": 12269.35,
      "Low": 12267.85,
      "Close": 12268.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.31.00",
      "TimeDecimal": 14.31,
      "Open": 12268.2,
      "High": 12268.3,
      "Low": 12265.7,
      "Close": 12265.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.32.00",
      "TimeDecimal": 14.32,
      "Open": 12265.8,
      "High": 12266.8,
      "Low": 12265.25,
      "Close": 12266.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.33.00",
      "TimeDecimal": 14.33,
      "Open": 12266.1,
      "High": 12266.7,
      "Low": 12263.6,
      "Close": 12263.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.34.00",
      "TimeDecimal": 14.34,
      "Open": 12263.65,
      "High": 12265.6,
      "Low": 12263.15,
      "Close": 12264.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.35.00",
      "TimeDecimal": 14.35,
      "Open": 12265.1,
      "High": 12265.95,
      "Low": 12264.65,
      "Close": 12265.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.36.00",
      "TimeDecimal": 14.36,
      "Open": 12265.95,
      "High": 12269.3,
      "Low": 12265.45,
      "Close": 12268.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.37.00",
      "TimeDecimal": 14.37,
      "Open": 12268.25,
      "High": 12268.3,
      "Low": 12265.05,
      "Close": 12265.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.38.00",
      "TimeDecimal": 14.38,
      "Open": 12265.25,
      "High": 12267.05,
      "Low": 12264.85,
      "Close": 12265.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.39.00",
      "TimeDecimal": 14.39,
      "Open": 12265.4,
      "High": 12270.4,
      "Low": 12265.4,
      "Close": 12269.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.40.00",
      "TimeDecimal": 14.4,
      "Open": 12270,
      "High": 12271.7,
      "Low": 12268.95,
      "Close": 12268.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.41.00",
      "TimeDecimal": 14.41,
      "Open": 12268.4,
      "High": 12269.9,
      "Low": 12268,
      "Close": 12268.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.42.00",
      "TimeDecimal": 14.42,
      "Open": 12268.65,
      "High": 12271.3,
      "Low": 12268.05,
      "Close": 12271.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.43.00",
      "TimeDecimal": 14.43,
      "Open": 12270.75,
      "High": 12272.5,
      "Low": 12269.6,
      "Close": 12271.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.44.00",
      "TimeDecimal": 14.44,
      "Open": 12272.2,
      "High": 12273.95,
      "Low": 12271.55,
      "Close": 12271.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.45.00",
      "TimeDecimal": 14.45,
      "Open": 12272,
      "High": 12274.9,
      "Low": 12271.35,
      "Close": 12272.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.46.00",
      "TimeDecimal": 14.46,
      "Open": 12272.4,
      "High": 12273.25,
      "Low": 12270.9,
      "Close": 12271.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.47.00",
      "TimeDecimal": 14.47,
      "Open": 12271.3,
      "High": 12271.55,
      "Low": 12269.55,
      "Close": 12270.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.48.00",
      "TimeDecimal": 14.48,
      "Open": 12270.6,
      "High": 12273.2,
      "Low": 12269.85,
      "Close": 12271.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.49.00",
      "TimeDecimal": 14.49,
      "Open": 12271.8,
      "High": 12272.6,
      "Low": 12270.2,
      "Close": 12271.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.50.00",
      "TimeDecimal": 14.5,
      "Open": 12270.95,
      "High": 12271.65,
      "Low": 12268.9,
      "Close": 12269.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.51.00",
      "TimeDecimal": 14.51,
      "Open": 12269.55,
      "High": 12270.9,
      "Low": 12268.8,
      "Close": 12270.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.52.00",
      "TimeDecimal": 14.52,
      "Open": 12270.55,
      "High": 12270.8,
      "Low": 12266.85,
      "Close": 12268
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.53.00",
      "TimeDecimal": 14.53,
      "Open": 12267.75,
      "High": 12268.9,
      "Low": 12267.05,
      "Close": 12268.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.54.00",
      "TimeDecimal": 14.54,
      "Open": 12268.5,
      "High": 12270.45,
      "Low": 12267.65,
      "Close": 12269.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.55.00",
      "TimeDecimal": 14.55,
      "Open": 12272.4,
      "High": 12273.15,
      "Low": 12270.3,
      "Close": 12272.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.56.00",
      "TimeDecimal": 14.56,
      "Open": 12272.75,
      "High": 12275.2,
      "Low": 12272.75,
      "Close": 12274.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.57.00",
      "TimeDecimal": 14.57,
      "Open": 12274.7,
      "High": 12274.7,
      "Low": 12272.25,
      "Close": 12272.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.58.00",
      "TimeDecimal": 14.58,
      "Open": 12272.55,
      "High": 12272.75,
      "Low": 12268.5,
      "Close": 12269.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "14.59.00",
      "TimeDecimal": 14.59,
      "Open": 12269.75,
      "High": 12272.1,
      "Low": 12269.5,
      "Close": 12271.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.00.00",
      "TimeDecimal": 15,
      "Open": 12271.85,
      "High": 12273.55,
      "Low": 12270.3,
      "Close": 12271.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.01.00",
      "TimeDecimal": 15.01,
      "Open": 12271.75,
      "High": 12274.75,
      "Low": 12271.5,
      "Close": 12274.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.02.00",
      "TimeDecimal": 15.02,
      "Open": 12274.65,
      "High": 12279.95,
      "Low": 12274.65,
      "Close": 12278.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.03.00",
      "TimeDecimal": 15.03,
      "Open": 12278.6,
      "High": 12279.05,
      "Low": 12275,
      "Close": 12275.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.04.00",
      "TimeDecimal": 15.04,
      "Open": 12275.95,
      "High": 12276.6,
      "Low": 12274.25,
      "Close": 12274.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.05.00",
      "TimeDecimal": 15.05,
      "Open": 12274.8,
      "High": 12278.1,
      "Low": 12274.55,
      "Close": 12277.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.06.00",
      "TimeDecimal": 15.06,
      "Open": 12278.2,
      "High": 12278.75,
      "Low": 12277.55,
      "Close": 12278.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.07.00",
      "TimeDecimal": 15.07,
      "Open": 12278.25,
      "High": 12279.55,
      "Low": 12278.15,
      "Close": 12278.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.08.00",
      "TimeDecimal": 15.08,
      "Open": 12278.3,
      "High": 12278.7,
      "Low": 12277.2,
      "Close": 12277.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.09.00",
      "TimeDecimal": 15.09,
      "Open": 12277.7,
      "High": 12280.1,
      "Low": 12277.55,
      "Close": 12278.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.10.00",
      "TimeDecimal": 15.1,
      "Open": 12279.05,
      "High": 12281.6,
      "Low": 12278.6,
      "Close": 12280.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.11.00",
      "TimeDecimal": 15.11,
      "Open": 12280.4,
      "High": 12283.15,
      "Low": 12280.25,
      "Close": 12280.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.12.00",
      "TimeDecimal": 15.12,
      "Open": 12280.75,
      "High": 12284.4,
      "Low": 12279.3,
      "Close": 12280.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.13.00",
      "TimeDecimal": 15.13,
      "Open": 12279.9,
      "High": 12283.4,
      "Low": 12279.9,
      "Close": 12282.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.14.00",
      "TimeDecimal": 15.14,
      "Open": 12281.75,
      "High": 12284.95,
      "Low": 12281.75,
      "Close": 12283.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.15.00",
      "TimeDecimal": 15.15,
      "Open": 12283.45,
      "High": 12285.65,
      "Low": 12282.55,
      "Close": 12284.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.16.00",
      "TimeDecimal": 15.16,
      "Open": 12283.55,
      "High": 12286.4,
      "Low": 12283,
      "Close": 12285.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.17.00",
      "TimeDecimal": 15.17,
      "Open": 12286,
      "High": 12286.75,
      "Low": 12282.45,
      "Close": 12284.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.18.00",
      "TimeDecimal": 15.18,
      "Open": 12284.7,
      "High": 12286.3,
      "Low": 12283.1,
      "Close": 12284.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.19.00",
      "TimeDecimal": 15.19,
      "Open": 12285.25,
      "High": 12289.9,
      "Low": 12285.25,
      "Close": 12288.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.20.00",
      "TimeDecimal": 15.2,
      "Open": 12287.25,
      "High": 12288.25,
      "Low": 12286.1,
      "Close": 12286.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.21.00",
      "TimeDecimal": 15.21,
      "Open": 12286.8,
      "High": 12287.75,
      "Low": 12285.15,
      "Close": 12285.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.22.00",
      "TimeDecimal": 15.22,
      "Open": 12286.65,
      "High": 12287.95,
      "Low": 12283.8,
      "Close": 12283.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.23.00",
      "TimeDecimal": 15.23,
      "Open": 12284.6,
      "High": 12284.6,
      "Low": 12281.85,
      "Close": 12281.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.24.00",
      "TimeDecimal": 15.24,
      "Open": 12281.75,
      "High": 12282.2,
      "Low": 12278.7,
      "Close": 12280.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.25.00",
      "TimeDecimal": 15.25,
      "Open": 12279.6,
      "High": 12281.65,
      "Low": 12279,
      "Close": 12280.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.26.00",
      "TimeDecimal": 15.26,
      "Open": 12281,
      "High": 12281.85,
      "Low": 12279.05,
      "Close": 12281.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.27.00",
      "TimeDecimal": 15.27,
      "Open": 12281.1,
      "High": 12282.8,
      "Low": 12280.6,
      "Close": 12281.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.28.00",
      "TimeDecimal": 15.28,
      "Open": 12281.55,
      "High": 12283.4,
      "Low": 12280.85,
      "Close": 12283.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.29.00",
      "TimeDecimal": 15.29,
      "Open": 12283.5,
      "High": 12284.5,
      "Low": 12282,
      "Close": 12283.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.30.00",
      "TimeDecimal": 15.3,
      "Open": 12283.35,
      "High": 12284.9,
      "Low": 12279.25,
      "Close": 12282.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.31.00",
      "TimeDecimal": 15.31,
      "Open": 12282.95,
      "High": 12282.95,
      "Low": 12282.95,
      "Close": 12282.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "15.33.00",
      "TimeDecimal": 15.33,
      "Open": 12284,
      "High": 12284,
      "Low": 12282.2,
      "Close": 12282.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200102,
      "Time": "16.39.00",
      "TimeDecimal": 16.39,
      "Open": 12282.2,
      "High": 12282.2,
      "Low": 12282.2,
      "Close": 12282.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.08.00",
      "TimeDecimal": 9.08,
      "Open": 12261.1,
      "High": 12261.1,
      "Low": 12261.1,
      "Close": 12261.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.16.00",
      "TimeDecimal": 9.16,
      "Open": 12263.5,
      "High": 12263.55,
      "Low": 12239.75,
      "Close": 12243.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.17.00",
      "TimeDecimal": 9.17,
      "Open": 12243,
      "High": 12246.05,
      "Low": 12236.4,
      "Close": 12237.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.18.00",
      "TimeDecimal": 9.18,
      "Open": 12237.75,
      "High": 12239.35,
      "Low": 12235.45,
      "Close": 12237.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.19.00",
      "TimeDecimal": 9.19,
      "Open": 12238.1,
      "High": 12246.75,
      "Low": 12238.1,
      "Close": 12240.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.20.00",
      "TimeDecimal": 9.2,
      "Open": 12239.35,
      "High": 12243.5,
      "Low": 12237.4,
      "Close": 12237.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.21.00",
      "TimeDecimal": 9.21,
      "Open": 12237.85,
      "High": 12239.05,
      "Low": 12234.15,
      "Close": 12237.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.22.00",
      "TimeDecimal": 9.22,
      "Open": 12237.55,
      "High": 12242.8,
      "Low": 12237,
      "Close": 12242.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.23.00",
      "TimeDecimal": 9.23,
      "Open": 12242.5,
      "High": 12243,
      "Low": 12239.2,
      "Close": 12240.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.24.00",
      "TimeDecimal": 9.24,
      "Open": 12240.3,
      "High": 12246.1,
      "Low": 12240.1,
      "Close": 12245.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.25.00",
      "TimeDecimal": 9.25,
      "Open": 12246.35,
      "High": 12248.75,
      "Low": 12244.2,
      "Close": 12244.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.26.00",
      "TimeDecimal": 9.26,
      "Open": 12244.4,
      "High": 12247.2,
      "Low": 12242.65,
      "Close": 12246.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.27.00",
      "TimeDecimal": 9.27,
      "Open": 12246.75,
      "High": 12251.65,
      "Low": 12245.8,
      "Close": 12250.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.28.00",
      "TimeDecimal": 9.28,
      "Open": 12250,
      "High": 12251.9,
      "Low": 12246.95,
      "Close": 12247
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.29.00",
      "TimeDecimal": 9.29,
      "Open": 12246.1,
      "High": 12249.45,
      "Low": 12245.15,
      "Close": 12248.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.30.00",
      "TimeDecimal": 9.3,
      "Open": 12248.35,
      "High": 12251.35,
      "Low": 12247.6,
      "Close": 12250.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.31.00",
      "TimeDecimal": 9.31,
      "Open": 12251.25,
      "High": 12251.25,
      "Low": 12242.25,
      "Close": 12242.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.32.00",
      "TimeDecimal": 9.32,
      "Open": 12242.7,
      "High": 12244.25,
      "Low": 12240.55,
      "Close": 12240.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.33.00",
      "TimeDecimal": 9.33,
      "Open": 12240.75,
      "High": 12246.15,
      "Low": 12240.6,
      "Close": 12245
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.34.00",
      "TimeDecimal": 9.34,
      "Open": 12245.25,
      "High": 12250.45,
      "Low": 12244.9,
      "Close": 12247.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.35.00",
      "TimeDecimal": 9.35,
      "Open": 12247.35,
      "High": 12247.35,
      "Low": 12236.8,
      "Close": 12237.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.36.00",
      "TimeDecimal": 9.36,
      "Open": 12238,
      "High": 12239.65,
      "Low": 12236.75,
      "Close": 12237.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.37.00",
      "TimeDecimal": 9.37,
      "Open": 12238.55,
      "High": 12242.35,
      "Low": 12237.55,
      "Close": 12242.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.38.00",
      "TimeDecimal": 9.38,
      "Open": 12242.45,
      "High": 12243.85,
      "Low": 12240.05,
      "Close": 12241.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.39.00",
      "TimeDecimal": 9.39,
      "Open": 12241.5,
      "High": 12245.9,
      "Low": 12241.25,
      "Close": 12245.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.40.00",
      "TimeDecimal": 9.4,
      "Open": 12246.15,
      "High": 12246.75,
      "Low": 12242.05,
      "Close": 12244.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.41.00",
      "TimeDecimal": 9.41,
      "Open": 12244.2,
      "High": 12244.9,
      "Low": 12241.25,
      "Close": 12244.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.42.00",
      "TimeDecimal": 9.42,
      "Open": 12244,
      "High": 12245.75,
      "Low": 12240.35,
      "Close": 12242.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.43.00",
      "TimeDecimal": 9.43,
      "Open": 12241.1,
      "High": 12241.75,
      "Low": 12236.6,
      "Close": 12237.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.44.00",
      "TimeDecimal": 9.44,
      "Open": 12237.15,
      "High": 12239.8,
      "Low": 12233.35,
      "Close": 12237.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.45.00",
      "TimeDecimal": 9.45,
      "Open": 12237.4,
      "High": 12238.2,
      "Low": 12235.05,
      "Close": 12235.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.46.00",
      "TimeDecimal": 9.46,
      "Open": 12235.7,
      "High": 12235.7,
      "Low": 12229.2,
      "Close": 12231.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.47.00",
      "TimeDecimal": 9.47,
      "Open": 12231.2,
      "High": 12231.95,
      "Low": 12228,
      "Close": 12230.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.48.00",
      "TimeDecimal": 9.48,
      "Open": 12230.65,
      "High": 12235.85,
      "Low": 12230.5,
      "Close": 12233.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.49.00",
      "TimeDecimal": 9.49,
      "Open": 12233.9,
      "High": 12235.5,
      "Low": 12232.6,
      "Close": 12235.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.50.00",
      "TimeDecimal": 9.5,
      "Open": 12234.9,
      "High": 12236.35,
      "Low": 12232.15,
      "Close": 12235.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.51.00",
      "TimeDecimal": 9.51,
      "Open": 12235.2,
      "High": 12240.95,
      "Low": 12234.35,
      "Close": 12240.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.52.00",
      "TimeDecimal": 9.52,
      "Open": 12240.85,
      "High": 12241.3,
      "Low": 12238.55,
      "Close": 12240.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.53.00",
      "TimeDecimal": 9.53,
      "Open": 12240.75,
      "High": 12244.65,
      "Low": 12240.25,
      "Close": 12244.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.54.00",
      "TimeDecimal": 9.54,
      "Open": 12243,
      "High": 12243.6,
      "Low": 12238.85,
      "Close": 12239.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.55.00",
      "TimeDecimal": 9.55,
      "Open": 12239.9,
      "High": 12240,
      "Low": 12236.15,
      "Close": 12236.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.56.00",
      "TimeDecimal": 9.56,
      "Open": 12236.4,
      "High": 12238.65,
      "Low": 12235.9,
      "Close": 12238.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.57.00",
      "TimeDecimal": 9.57,
      "Open": 12237.7,
      "High": 12240.7,
      "Low": 12237.3,
      "Close": 12238.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.58.00",
      "TimeDecimal": 9.58,
      "Open": 12238.9,
      "High": 12239.75,
      "Low": 12237.8,
      "Close": 12239.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "09.59.00",
      "TimeDecimal": 9.59,
      "Open": 12239.85,
      "High": 12240.1,
      "Low": 12238.7,
      "Close": 12239.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.00.00",
      "TimeDecimal": 10,
      "Open": 12239.75,
      "High": 12241.35,
      "Low": 12238.85,
      "Close": 12241.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.01.00",
      "TimeDecimal": 10.01,
      "Open": 12241.3,
      "High": 12248.4,
      "Low": 12241.1,
      "Close": 12248.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.02.00",
      "TimeDecimal": 10.02,
      "Open": 12248.05,
      "High": 12248.7,
      "Low": 12245.15,
      "Close": 12245.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.03.00",
      "TimeDecimal": 10.03,
      "Open": 12244.7,
      "High": 12245.35,
      "Low": 12243.4,
      "Close": 12244.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.04.00",
      "TimeDecimal": 10.04,
      "Open": 12245,
      "High": 12246.7,
      "Low": 12244.65,
      "Close": 12246.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.05.00",
      "TimeDecimal": 10.05,
      "Open": 12246.2,
      "High": 12252.05,
      "Low": 12245.85,
      "Close": 12248.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.06.00",
      "TimeDecimal": 10.06,
      "Open": 12248.35,
      "High": 12250.55,
      "Low": 12247.3,
      "Close": 12250.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.07.00",
      "TimeDecimal": 10.07,
      "Open": 12250.15,
      "High": 12254.9,
      "Low": 12250.15,
      "Close": 12253.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.08.00",
      "TimeDecimal": 10.08,
      "Open": 12252.95,
      "High": 12254.3,
      "Low": 12250.7,
      "Close": 12252.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.09.00",
      "TimeDecimal": 10.09,
      "Open": 12252.45,
      "High": 12255.75,
      "Low": 12252.3,
      "Close": 12255
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.10.00",
      "TimeDecimal": 10.1,
      "Open": 12254.95,
      "High": 12254.95,
      "Low": 12251.8,
      "Close": 12252.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.11.00",
      "TimeDecimal": 10.11,
      "Open": 12252.55,
      "High": 12252.55,
      "Low": 12247.25,
      "Close": 12249.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.12.00",
      "TimeDecimal": 10.12,
      "Open": 12249.5,
      "High": 12252.9,
      "Low": 12249.25,
      "Close": 12251.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.13.00",
      "TimeDecimal": 10.13,
      "Open": 12251.3,
      "High": 12254.6,
      "Low": 12250,
      "Close": 12250.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.14.00",
      "TimeDecimal": 10.14,
      "Open": 12250.8,
      "High": 12255.8,
      "Low": 12250.55,
      "Close": 12252.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.15.00",
      "TimeDecimal": 10.15,
      "Open": 12252.65,
      "High": 12255.1,
      "Low": 12251.5,
      "Close": 12254.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.16.00",
      "TimeDecimal": 10.16,
      "Open": 12254.7,
      "High": 12255.05,
      "Low": 12252.2,
      "Close": 12254.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.17.00",
      "TimeDecimal": 10.17,
      "Open": 12254.85,
      "High": 12256.4,
      "Low": 12252.25,
      "Close": 12255.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.18.00",
      "TimeDecimal": 10.18,
      "Open": 12256.05,
      "High": 12256.55,
      "Low": 12254.2,
      "Close": 12255.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.19.00",
      "TimeDecimal": 10.19,
      "Open": 12256,
      "High": 12258.55,
      "Low": 12254.5,
      "Close": 12258.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.20.00",
      "TimeDecimal": 10.2,
      "Open": 12258.3,
      "High": 12265.6,
      "Low": 12258.3,
      "Close": 12264.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.21.00",
      "TimeDecimal": 10.21,
      "Open": 12265.05,
      "High": 12265.35,
      "Low": 12258.45,
      "Close": 12258.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.22.00",
      "TimeDecimal": 10.22,
      "Open": 12258.2,
      "High": 12260.5,
      "Low": 12257.05,
      "Close": 12258.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.23.00",
      "TimeDecimal": 10.23,
      "Open": 12257.85,
      "High": 12259.5,
      "Low": 12256.7,
      "Close": 12259.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.24.00",
      "TimeDecimal": 10.24,
      "Open": 12259.35,
      "High": 12261,
      "Low": 12258.95,
      "Close": 12260.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.25.00",
      "TimeDecimal": 10.25,
      "Open": 12260.7,
      "High": 12261.5,
      "Low": 12257.55,
      "Close": 12259.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.26.00",
      "TimeDecimal": 10.26,
      "Open": 12258.9,
      "High": 12260.15,
      "Low": 12257.95,
      "Close": 12258.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.27.00",
      "TimeDecimal": 10.27,
      "Open": 12258.2,
      "High": 12258.7,
      "Low": 12252.65,
      "Close": 12252.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.28.00",
      "TimeDecimal": 10.28,
      "Open": 12252.55,
      "High": 12253.6,
      "Low": 12248.45,
      "Close": 12248.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.29.00",
      "TimeDecimal": 10.29,
      "Open": 12249.95,
      "High": 12249.95,
      "Low": 12247.3,
      "Close": 12249.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.30.00",
      "TimeDecimal": 10.3,
      "Open": 12249.25,
      "High": 12252.4,
      "Low": 12248,
      "Close": 12252.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.31.00",
      "TimeDecimal": 10.31,
      "Open": 12252.45,
      "High": 12253.6,
      "Low": 12251.5,
      "Close": 12253.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.32.00",
      "TimeDecimal": 10.32,
      "Open": 12253.35,
      "High": 12255.3,
      "Low": 12249.85,
      "Close": 12250.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.33.00",
      "TimeDecimal": 10.33,
      "Open": 12250.25,
      "High": 12250.4,
      "Low": 12242.7,
      "Close": 12243.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.34.00",
      "TimeDecimal": 10.34,
      "Open": 12243.95,
      "High": 12246.25,
      "Low": 12242.55,
      "Close": 12245.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.35.00",
      "TimeDecimal": 10.35,
      "Open": 12245.65,
      "High": 12245.65,
      "Low": 12242.15,
      "Close": 12242.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.36.00",
      "TimeDecimal": 10.36,
      "Open": 12242.6,
      "High": 12245.5,
      "Low": 12241.05,
      "Close": 12244.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.37.00",
      "TimeDecimal": 10.37,
      "Open": 12244.15,
      "High": 12245.75,
      "Low": 12243.1,
      "Close": 12243.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.38.00",
      "TimeDecimal": 10.38,
      "Open": 12244,
      "High": 12246.05,
      "Low": 12243.4,
      "Close": 12245.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.39.00",
      "TimeDecimal": 10.39,
      "Open": 12245.25,
      "High": 12246.7,
      "Low": 12243.95,
      "Close": 12244.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.40.00",
      "TimeDecimal": 10.4,
      "Open": 12244.75,
      "High": 12244.75,
      "Low": 12240.3,
      "Close": 12241.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.41.00",
      "TimeDecimal": 10.41,
      "Open": 12242.2,
      "High": 12242.2,
      "Low": 12237.8,
      "Close": 12238.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.42.00",
      "TimeDecimal": 10.42,
      "Open": 12238.15,
      "High": 12239.2,
      "Low": 12236.6,
      "Close": 12238.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.43.00",
      "TimeDecimal": 10.43,
      "Open": 12237.9,
      "High": 12240.3,
      "Low": 12237.6,
      "Close": 12240.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.44.00",
      "TimeDecimal": 10.44,
      "Open": 12240.2,
      "High": 12242.4,
      "Low": 12240.15,
      "Close": 12241.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.45.00",
      "TimeDecimal": 10.45,
      "Open": 12241.75,
      "High": 12242.5,
      "Low": 12240.45,
      "Close": 12240.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.46.00",
      "TimeDecimal": 10.46,
      "Open": 12240.6,
      "High": 12242.3,
      "Low": 12240.05,
      "Close": 12241.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.47.00",
      "TimeDecimal": 10.47,
      "Open": 12241.8,
      "High": 12243.85,
      "Low": 12241.55,
      "Close": 12242.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.48.00",
      "TimeDecimal": 10.48,
      "Open": 12242.75,
      "High": 12245.1,
      "Low": 12242.75,
      "Close": 12244.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.49.00",
      "TimeDecimal": 10.49,
      "Open": 12244.45,
      "High": 12245.65,
      "Low": 12242.6,
      "Close": 12243.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.50.00",
      "TimeDecimal": 10.5,
      "Open": 12243.5,
      "High": 12244.05,
      "Low": 12242.45,
      "Close": 12243.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.51.00",
      "TimeDecimal": 10.51,
      "Open": 12242.9,
      "High": 12245.35,
      "Low": 12242.9,
      "Close": 12244
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.52.00",
      "TimeDecimal": 10.52,
      "Open": 12244.15,
      "High": 12245.6,
      "Low": 12243.8,
      "Close": 12244.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.53.00",
      "TimeDecimal": 10.53,
      "Open": 12244.95,
      "High": 12246.15,
      "Low": 12244.85,
      "Close": 12245.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.54.00",
      "TimeDecimal": 10.54,
      "Open": 12245.95,
      "High": 12246.1,
      "Low": 12243.6,
      "Close": 12244
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.55.00",
      "TimeDecimal": 10.55,
      "Open": 12244.25,
      "High": 12245.05,
      "Low": 12235.7,
      "Close": 12237.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.56.00",
      "TimeDecimal": 10.56,
      "Open": 12237.65,
      "High": 12241.45,
      "Low": 12236.8,
      "Close": 12240.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.57.00",
      "TimeDecimal": 10.57,
      "Open": 12240.35,
      "High": 12244,
      "Low": 12240.25,
      "Close": 12243.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.58.00",
      "TimeDecimal": 10.58,
      "Open": 12244,
      "High": 12245.55,
      "Low": 12244,
      "Close": 12245.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "10.59.00",
      "TimeDecimal": 10.59,
      "Open": 12245.1,
      "High": 12245.35,
      "Low": 12243.15,
      "Close": 12243.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.00.00",
      "TimeDecimal": 11,
      "Open": 12243.75,
      "High": 12243.75,
      "Low": 12241.4,
      "Close": 12242.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.01.00",
      "TimeDecimal": 11.01,
      "Open": 12242.25,
      "High": 12243.65,
      "Low": 12241.85,
      "Close": 12242.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.02.00",
      "TimeDecimal": 11.02,
      "Open": 12242.9,
      "High": 12243.4,
      "Low": 12240.2,
      "Close": 12241.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.03.00",
      "TimeDecimal": 11.03,
      "Open": 12241.05,
      "High": 12241.55,
      "Low": 12238.85,
      "Close": 12240.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.04.00",
      "TimeDecimal": 11.04,
      "Open": 12240.4,
      "High": 12242.05,
      "Low": 12239.75,
      "Close": 12240.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.05.00",
      "TimeDecimal": 11.05,
      "Open": 12240.4,
      "High": 12241.4,
      "Low": 12239.3,
      "Close": 12241.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.06.00",
      "TimeDecimal": 11.06,
      "Open": 12241.6,
      "High": 12242.3,
      "Low": 12241.2,
      "Close": 12241.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.07.00",
      "TimeDecimal": 11.07,
      "Open": 12241.15,
      "High": 12241.45,
      "Low": 12239.85,
      "Close": 12240.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.08.00",
      "TimeDecimal": 11.08,
      "Open": 12240.55,
      "High": 12240.55,
      "Low": 12236.5,
      "Close": 12237.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.09.00",
      "TimeDecimal": 11.09,
      "Open": 12237.25,
      "High": 12239.35,
      "Low": 12237.2,
      "Close": 12238.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.10.00",
      "TimeDecimal": 11.1,
      "Open": 12239.1,
      "High": 12239.1,
      "Low": 12237.25,
      "Close": 12237.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.11.00",
      "TimeDecimal": 11.11,
      "Open": 12237.5,
      "High": 12237.55,
      "Low": 12236.05,
      "Close": 12237.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.12.00",
      "TimeDecimal": 11.12,
      "Open": 12237.3,
      "High": 12240.05,
      "Low": 12235.4,
      "Close": 12239.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.13.00",
      "TimeDecimal": 11.13,
      "Open": 12239.2,
      "High": 12241.9,
      "Low": 12239.1,
      "Close": 12241.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.14.00",
      "TimeDecimal": 11.14,
      "Open": 12241.5,
      "High": 12244.2,
      "Low": 12241.5,
      "Close": 12243.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.15.00",
      "TimeDecimal": 11.15,
      "Open": 12243.7,
      "High": 12243.95,
      "Low": 12240.45,
      "Close": 12243.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.16.00",
      "TimeDecimal": 11.16,
      "Open": 12243.45,
      "High": 12245.75,
      "Low": 12243,
      "Close": 12245.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.17.00",
      "TimeDecimal": 11.17,
      "Open": 12245.6,
      "High": 12245.85,
      "Low": 12244.6,
      "Close": 12245.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.18.00",
      "TimeDecimal": 11.18,
      "Open": 12245.55,
      "High": 12249.05,
      "Low": 12245.5,
      "Close": 12247.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.19.00",
      "TimeDecimal": 11.19,
      "Open": 12247.7,
      "High": 12248.15,
      "Low": 12245.9,
      "Close": 12246.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.20.00",
      "TimeDecimal": 11.2,
      "Open": 12246.2,
      "High": 12248.45,
      "Low": 12246.2,
      "Close": 12248.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.21.00",
      "TimeDecimal": 11.21,
      "Open": 12247.75,
      "High": 12248.2,
      "Low": 12245.05,
      "Close": 12245.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.22.00",
      "TimeDecimal": 11.22,
      "Open": 12245.6,
      "High": 12245.6,
      "Low": 12241.9,
      "Close": 12243.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.23.00",
      "TimeDecimal": 11.23,
      "Open": 12243.9,
      "High": 12245.65,
      "Low": 12243.7,
      "Close": 12244.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.24.00",
      "TimeDecimal": 11.24,
      "Open": 12244,
      "High": 12244.45,
      "Low": 12241.7,
      "Close": 12243.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.25.00",
      "TimeDecimal": 11.25,
      "Open": 12243.6,
      "High": 12244.8,
      "Low": 12243.35,
      "Close": 12244.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.26.00",
      "TimeDecimal": 11.26,
      "Open": 12244.35,
      "High": 12244.5,
      "Low": 12242.1,
      "Close": 12242.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.27.00",
      "TimeDecimal": 11.27,
      "Open": 12242.8,
      "High": 12244,
      "Low": 12242.4,
      "Close": 12243.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.28.00",
      "TimeDecimal": 11.28,
      "Open": 12243.25,
      "High": 12244,
      "Low": 12242.2,
      "Close": 12242.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.29.00",
      "TimeDecimal": 11.29,
      "Open": 12242.7,
      "High": 12243.65,
      "Low": 12242.1,
      "Close": 12243.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.30.00",
      "TimeDecimal": 11.3,
      "Open": 12243.1,
      "High": 12243.9,
      "Low": 12241.85,
      "Close": 12243.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.31.00",
      "TimeDecimal": 11.31,
      "Open": 12244.05,
      "High": 12244.5,
      "Low": 12243.25,
      "Close": 12243.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.32.00",
      "TimeDecimal": 11.32,
      "Open": 12243.45,
      "High": 12243.95,
      "Low": 12242.35,
      "Close": 12243.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.33.00",
      "TimeDecimal": 11.33,
      "Open": 12243.1,
      "High": 12245.95,
      "Low": 12242.7,
      "Close": 12243.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.34.00",
      "TimeDecimal": 11.34,
      "Open": 12242.9,
      "High": 12243.85,
      "Low": 12238.55,
      "Close": 12238.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.35.00",
      "TimeDecimal": 11.35,
      "Open": 12239.5,
      "High": 12241.25,
      "Low": 12239.35,
      "Close": 12240.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.36.00",
      "TimeDecimal": 11.36,
      "Open": 12240.2,
      "High": 12241.15,
      "Low": 12238.9,
      "Close": 12240.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.37.00",
      "TimeDecimal": 11.37,
      "Open": 12240.85,
      "High": 12242.4,
      "Low": 12240.85,
      "Close": 12241.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.38.00",
      "TimeDecimal": 11.38,
      "Open": 12241.5,
      "High": 12241.5,
      "Low": 12240,
      "Close": 12240.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.39.00",
      "TimeDecimal": 11.39,
      "Open": 12240.35,
      "High": 12240.35,
      "Low": 12238.65,
      "Close": 12238.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.40.00",
      "TimeDecimal": 11.4,
      "Open": 12239.45,
      "High": 12239.5,
      "Low": 12236.6,
      "Close": 12236.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.41.00",
      "TimeDecimal": 11.41,
      "Open": 12236.8,
      "High": 12238.65,
      "Low": 12236.7,
      "Close": 12238.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.42.00",
      "TimeDecimal": 11.42,
      "Open": 12238.2,
      "High": 12240,
      "Low": 12237.85,
      "Close": 12239.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.43.00",
      "TimeDecimal": 11.43,
      "Open": 12239.4,
      "High": 12240.4,
      "Low": 12238.65,
      "Close": 12239.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.44.00",
      "TimeDecimal": 11.44,
      "Open": 12238.75,
      "High": 12239.55,
      "Low": 12238.15,
      "Close": 12239.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.45.00",
      "TimeDecimal": 11.45,
      "Open": 12238.8,
      "High": 12239.35,
      "Low": 12236.3,
      "Close": 12236.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.46.00",
      "TimeDecimal": 11.46,
      "Open": 12236.25,
      "High": 12236.3,
      "Low": 12226.95,
      "Close": 12227.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.47.00",
      "TimeDecimal": 11.47,
      "Open": 12227.55,
      "High": 12228.7,
      "Low": 12225.3,
      "Close": 12227
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.48.00",
      "TimeDecimal": 11.48,
      "Open": 12226.15,
      "High": 12226.85,
      "Low": 12223.6,
      "Close": 12224
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.49.00",
      "TimeDecimal": 11.49,
      "Open": 12224.25,
      "High": 12224.75,
      "Low": 12222.3,
      "Close": 12223.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.50.00",
      "TimeDecimal": 11.5,
      "Open": 12223.6,
      "High": 12226.5,
      "Low": 12223.5,
      "Close": 12226.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.51.00",
      "TimeDecimal": 11.51,
      "Open": 12226.7,
      "High": 12228.8,
      "Low": 12225.6,
      "Close": 12228.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.52.00",
      "TimeDecimal": 11.52,
      "Open": 12228.7,
      "High": 12230.65,
      "Low": 12228.35,
      "Close": 12229.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.53.00",
      "TimeDecimal": 11.53,
      "Open": 12229.95,
      "High": 12231.15,
      "Low": 12229.5,
      "Close": 12230.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.54.00",
      "TimeDecimal": 11.54,
      "Open": 12230.95,
      "High": 12232.35,
      "Low": 12230.45,
      "Close": 12232.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.55.00",
      "TimeDecimal": 11.55,
      "Open": 12232,
      "High": 12232.25,
      "Low": 12230.2,
      "Close": 12231.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.56.00",
      "TimeDecimal": 11.56,
      "Open": 12230.95,
      "High": 12231.95,
      "Low": 12230.65,
      "Close": 12231
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.57.00",
      "TimeDecimal": 11.57,
      "Open": 12231.25,
      "High": 12231.25,
      "Low": 12226.95,
      "Close": 12227.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.58.00",
      "TimeDecimal": 11.58,
      "Open": 12227.75,
      "High": 12227.75,
      "Low": 12224.05,
      "Close": 12224.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "11.59.00",
      "TimeDecimal": 11.59,
      "Open": 12224.35,
      "High": 12226.15,
      "Low": 12223.5,
      "Close": 12224.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.00.00",
      "TimeDecimal": 12,
      "Open": 12224.8,
      "High": 12225.95,
      "Low": 12223.65,
      "Close": 12224.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.01.00",
      "TimeDecimal": 12.01,
      "Open": 12224.8,
      "High": 12226.1,
      "Low": 12217.75,
      "Close": 12217.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.02.00",
      "TimeDecimal": 12.02,
      "Open": 12218,
      "High": 12218.9,
      "Low": 12217.15,
      "Close": 12218.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.03.00",
      "TimeDecimal": 12.03,
      "Open": 12218.6,
      "High": 12220.85,
      "Low": 12218.15,
      "Close": 12219.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.04.00",
      "TimeDecimal": 12.04,
      "Open": 12219.45,
      "High": 12221.45,
      "Low": 12219,
      "Close": 12220.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.05.00",
      "TimeDecimal": 12.05,
      "Open": 12219.85,
      "High": 12220.1,
      "Low": 12218,
      "Close": 12218.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.06.00",
      "TimeDecimal": 12.06,
      "Open": 12218.3,
      "High": 12218.8,
      "Low": 12217.8,
      "Close": 12218.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.07.00",
      "TimeDecimal": 12.07,
      "Open": 12218.8,
      "High": 12219.05,
      "Low": 12218.2,
      "Close": 12218.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.08.00",
      "TimeDecimal": 12.08,
      "Open": 12218.35,
      "High": 12220.95,
      "Low": 12218.35,
      "Close": 12220.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.09.00",
      "TimeDecimal": 12.09,
      "Open": 12221.1,
      "High": 12224.25,
      "Low": 12221,
      "Close": 12224.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.10.00",
      "TimeDecimal": 12.1,
      "Open": 12224.15,
      "High": 12224.3,
      "Low": 12221.8,
      "Close": 12223.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.11.00",
      "TimeDecimal": 12.11,
      "Open": 12223.45,
      "High": 12225.2,
      "Low": 12222.65,
      "Close": 12224.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.12.00",
      "TimeDecimal": 12.12,
      "Open": 12224.55,
      "High": 12225.1,
      "Low": 12222.7,
      "Close": 12223.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.13.00",
      "TimeDecimal": 12.13,
      "Open": 12223.7,
      "High": 12223.7,
      "Low": 12221.4,
      "Close": 12222.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.14.00",
      "TimeDecimal": 12.14,
      "Open": 12222.75,
      "High": 12222.75,
      "Low": 12220.55,
      "Close": 12222.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.15.00",
      "TimeDecimal": 12.15,
      "Open": 12222.4,
      "High": 12222.85,
      "Low": 12221.6,
      "Close": 12222.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.16.00",
      "TimeDecimal": 12.16,
      "Open": 12222.9,
      "High": 12222.9,
      "Low": 12220.75,
      "Close": 12221.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.17.00",
      "TimeDecimal": 12.17,
      "Open": 12221.15,
      "High": 12221.15,
      "Low": 12218.6,
      "Close": 12219.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.18.00",
      "TimeDecimal": 12.18,
      "Open": 12219.3,
      "High": 12220.1,
      "Low": 12218.6,
      "Close": 12219
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.19.00",
      "TimeDecimal": 12.19,
      "Open": 12219.2,
      "High": 12220.2,
      "Low": 12218.3,
      "Close": 12218.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.20.00",
      "TimeDecimal": 12.2,
      "Open": 12218.8,
      "High": 12218.8,
      "Low": 12215.25,
      "Close": 12216.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.21.00",
      "TimeDecimal": 12.21,
      "Open": 12216.2,
      "High": 12217.1,
      "Low": 12213.8,
      "Close": 12216.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.22.00",
      "TimeDecimal": 12.22,
      "Open": 12216.4,
      "High": 12218.85,
      "Low": 12216.1,
      "Close": 12218.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.23.00",
      "TimeDecimal": 12.23,
      "Open": 12218.6,
      "High": 12220.8,
      "Low": 12218.6,
      "Close": 12220.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.24.00",
      "TimeDecimal": 12.24,
      "Open": 12220.65,
      "High": 12226,
      "Low": 12220.65,
      "Close": 12225.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.25.00",
      "TimeDecimal": 12.25,
      "Open": 12225.9,
      "High": 12226.3,
      "Low": 12224.1,
      "Close": 12224.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.26.00",
      "TimeDecimal": 12.26,
      "Open": 12224.85,
      "High": 12226.45,
      "Low": 12223.4,
      "Close": 12224.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.27.00",
      "TimeDecimal": 12.27,
      "Open": 12224.3,
      "High": 12226.55,
      "Low": 12224.05,
      "Close": 12226.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.28.00",
      "TimeDecimal": 12.28,
      "Open": 12226.6,
      "High": 12227,
      "Low": 12225.5,
      "Close": 12226.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.29.00",
      "TimeDecimal": 12.29,
      "Open": 12226.25,
      "High": 12228.5,
      "Low": 12225.85,
      "Close": 12228.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.30.00",
      "TimeDecimal": 12.3,
      "Open": 12228.1,
      "High": 12230.35,
      "Low": 12228.1,
      "Close": 12229.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.31.00",
      "TimeDecimal": 12.31,
      "Open": 12229.95,
      "High": 12230.35,
      "Low": 12226.6,
      "Close": 12226.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.32.00",
      "TimeDecimal": 12.32,
      "Open": 12226.45,
      "High": 12227.6,
      "Low": 12225.1,
      "Close": 12226.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.33.00",
      "TimeDecimal": 12.33,
      "Open": 12226.3,
      "High": 12226.7,
      "Low": 12225.35,
      "Close": 12225.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.34.00",
      "TimeDecimal": 12.34,
      "Open": 12225.9,
      "High": 12225.9,
      "Low": 12223.7,
      "Close": 12224.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.35.00",
      "TimeDecimal": 12.35,
      "Open": 12223.95,
      "High": 12225.95,
      "Low": 12223.7,
      "Close": 12224.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.36.00",
      "TimeDecimal": 12.36,
      "Open": 12224.95,
      "High": 12225,
      "Low": 12222.2,
      "Close": 12222.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.37.00",
      "TimeDecimal": 12.37,
      "Open": 12222.9,
      "High": 12225.9,
      "Low": 12222.9,
      "Close": 12225.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.38.00",
      "TimeDecimal": 12.38,
      "Open": 12225.35,
      "High": 12227.4,
      "Low": 12225.35,
      "Close": 12226.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.39.00",
      "TimeDecimal": 12.39,
      "Open": 12225.85,
      "High": 12227.55,
      "Low": 12225.7,
      "Close": 12226
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.40.00",
      "TimeDecimal": 12.4,
      "Open": 12226.1,
      "High": 12227.05,
      "Low": 12225.65,
      "Close": 12226.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.41.00",
      "TimeDecimal": 12.41,
      "Open": 12226.05,
      "High": 12226.55,
      "Low": 12225.45,
      "Close": 12226
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.42.00",
      "TimeDecimal": 12.42,
      "Open": 12226.4,
      "High": 12229.45,
      "Low": 12226.1,
      "Close": 12229.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.43.00",
      "TimeDecimal": 12.43,
      "Open": 12228.9,
      "High": 12230.95,
      "Low": 12228.65,
      "Close": 12230.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.44.00",
      "TimeDecimal": 12.44,
      "Open": 12230.3,
      "High": 12231.1,
      "Low": 12229.35,
      "Close": 12230.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.45.00",
      "TimeDecimal": 12.45,
      "Open": 12230.65,
      "High": 12231.6,
      "Low": 12230.35,
      "Close": 12231.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.46.00",
      "TimeDecimal": 12.46,
      "Open": 12231.25,
      "High": 12233.55,
      "Low": 12231.25,
      "Close": 12233.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.47.00",
      "TimeDecimal": 12.47,
      "Open": 12232.8,
      "High": 12232.8,
      "Low": 12231.55,
      "Close": 12231.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.48.00",
      "TimeDecimal": 12.48,
      "Open": 12231.7,
      "High": 12232.35,
      "Low": 12229.05,
      "Close": 12230.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.49.00",
      "TimeDecimal": 12.49,
      "Open": 12229.65,
      "High": 12229.65,
      "Low": 12227.8,
      "Close": 12229.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.50.00",
      "TimeDecimal": 12.5,
      "Open": 12228.95,
      "High": 12230.45,
      "Low": 12228.5,
      "Close": 12230.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.51.00",
      "TimeDecimal": 12.51,
      "Open": 12230.2,
      "High": 12230.55,
      "Low": 12229.1,
      "Close": 12229.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.52.00",
      "TimeDecimal": 12.52,
      "Open": 12228.9,
      "High": 12229.95,
      "Low": 12228.2,
      "Close": 12229.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.53.00",
      "TimeDecimal": 12.53,
      "Open": 12229,
      "High": 12231,
      "Low": 12228.9,
      "Close": 12229.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.54.00",
      "TimeDecimal": 12.54,
      "Open": 12229.5,
      "High": 12230.75,
      "Low": 12228.85,
      "Close": 12229.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.55.00",
      "TimeDecimal": 12.55,
      "Open": 12229,
      "High": 12230,
      "Low": 12228.35,
      "Close": 12228.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.56.00",
      "TimeDecimal": 12.56,
      "Open": 12229.1,
      "High": 12229.2,
      "Low": 12227.6,
      "Close": 12227.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.57.00",
      "TimeDecimal": 12.57,
      "Open": 12227.65,
      "High": 12227.65,
      "Low": 12225.35,
      "Close": 12225.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.58.00",
      "TimeDecimal": 12.58,
      "Open": 12225.65,
      "High": 12226,
      "Low": 12224.95,
      "Close": 12225.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "12.59.00",
      "TimeDecimal": 12.59,
      "Open": 12225.5,
      "High": 12227.05,
      "Low": 12224.95,
      "Close": 12226.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.00.00",
      "TimeDecimal": 13,
      "Open": 12225.9,
      "High": 12227.2,
      "Low": 12225.65,
      "Close": 12226.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.01.00",
      "TimeDecimal": 13.01,
      "Open": 12226.5,
      "High": 12228.55,
      "Low": 12225.65,
      "Close": 12228
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.02.00",
      "TimeDecimal": 13.02,
      "Open": 12228.25,
      "High": 12229.2,
      "Low": 12226.55,
      "Close": 12226.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.03.00",
      "TimeDecimal": 13.03,
      "Open": 12227.2,
      "High": 12228.25,
      "Low": 12226.5,
      "Close": 12228.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.04.00",
      "TimeDecimal": 13.04,
      "Open": 12228.1,
      "High": 12229.6,
      "Low": 12226.65,
      "Close": 12227.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.05.00",
      "TimeDecimal": 13.05,
      "Open": 12227.4,
      "High": 12229.6,
      "Low": 12226.3,
      "Close": 12229.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.06.00",
      "TimeDecimal": 13.06,
      "Open": 12229.45,
      "High": 12236.85,
      "Low": 12229.25,
      "Close": 12236.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.07.00",
      "TimeDecimal": 13.07,
      "Open": 12236.55,
      "High": 12240.05,
      "Low": 12235.9,
      "Close": 12237.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.08.00",
      "TimeDecimal": 13.08,
      "Open": 12237.65,
      "High": 12238.15,
      "Low": 12234.45,
      "Close": 12234.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.09.00",
      "TimeDecimal": 13.09,
      "Open": 12235.15,
      "High": 12236.7,
      "Low": 12233.45,
      "Close": 12234
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.10.00",
      "TimeDecimal": 13.1,
      "Open": 12233.6,
      "High": 12237.05,
      "Low": 12233.4,
      "Close": 12235.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.11.00",
      "TimeDecimal": 13.11,
      "Open": 12235.05,
      "High": 12237.75,
      "Low": 12235.05,
      "Close": 12237
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.12.00",
      "TimeDecimal": 13.12,
      "Open": 12237.5,
      "High": 12238.3,
      "Low": 12235.8,
      "Close": 12236.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.13.00",
      "TimeDecimal": 13.13,
      "Open": 12237.85,
      "High": 12237.85,
      "Low": 12234.9,
      "Close": 12236.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.14.00",
      "TimeDecimal": 13.14,
      "Open": 12235.4,
      "High": 12236.9,
      "Low": 12235.35,
      "Close": 12236.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.15.00",
      "TimeDecimal": 13.15,
      "Open": 12236.25,
      "High": 12237.8,
      "Low": 12235.95,
      "Close": 12237
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.16.00",
      "TimeDecimal": 13.16,
      "Open": 12236.6,
      "High": 12237.05,
      "Low": 12235.3,
      "Close": 12235.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.17.00",
      "TimeDecimal": 13.17,
      "Open": 12236.1,
      "High": 12236.8,
      "Low": 12233.7,
      "Close": 12234.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.18.00",
      "TimeDecimal": 13.18,
      "Open": 12234.1,
      "High": 12235.45,
      "Low": 12233.9,
      "Close": 12234.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.19.00",
      "TimeDecimal": 13.19,
      "Open": 12234.8,
      "High": 12234.8,
      "Low": 12229.2,
      "Close": 12229.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.20.00",
      "TimeDecimal": 13.2,
      "Open": 12230.5,
      "High": 12231.55,
      "Low": 12229,
      "Close": 12230.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.21.00",
      "TimeDecimal": 13.21,
      "Open": 12230.6,
      "High": 12230.7,
      "Low": 12227,
      "Close": 12228.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.22.00",
      "TimeDecimal": 13.22,
      "Open": 12227.95,
      "High": 12230.55,
      "Low": 12227.05,
      "Close": 12230.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.23.00",
      "TimeDecimal": 13.23,
      "Open": 12230.15,
      "High": 12232,
      "Low": 12229.35,
      "Close": 12230.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.24.00",
      "TimeDecimal": 13.24,
      "Open": 12230.6,
      "High": 12231.8,
      "Low": 12228.7,
      "Close": 12231.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.25.00",
      "TimeDecimal": 13.25,
      "Open": 12231.65,
      "High": 12231.8,
      "Low": 12225.2,
      "Close": 12225.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.26.00",
      "TimeDecimal": 13.26,
      "Open": 12225.85,
      "High": 12227.95,
      "Low": 12225.2,
      "Close": 12227.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.27.00",
      "TimeDecimal": 13.27,
      "Open": 12227.3,
      "High": 12230.5,
      "Low": 12227.3,
      "Close": 12230.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.28.00",
      "TimeDecimal": 13.28,
      "Open": 12229.9,
      "High": 12229.9,
      "Low": 12226.85,
      "Close": 12227.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.29.00",
      "TimeDecimal": 13.29,
      "Open": 12227.6,
      "High": 12228.45,
      "Low": 12226.4,
      "Close": 12227.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.30.00",
      "TimeDecimal": 13.3,
      "Open": 12227.4,
      "High": 12228.55,
      "Low": 12226.25,
      "Close": 12228.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.31.00",
      "TimeDecimal": 13.31,
      "Open": 12227.95,
      "High": 12227.95,
      "Low": 12224.35,
      "Close": 12225.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.32.00",
      "TimeDecimal": 13.32,
      "Open": 12225.1,
      "High": 12226.2,
      "Low": 12224.15,
      "Close": 12225.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.33.00",
      "TimeDecimal": 13.33,
      "Open": 12224.85,
      "High": 12225.7,
      "Low": 12222.95,
      "Close": 12225.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.34.00",
      "TimeDecimal": 13.34,
      "Open": 12225.25,
      "High": 12227.85,
      "Low": 12224.75,
      "Close": 12227.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.35.00",
      "TimeDecimal": 13.35,
      "Open": 12227.25,
      "High": 12230,
      "Low": 12227.25,
      "Close": 12229.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.36.00",
      "TimeDecimal": 13.36,
      "Open": 12229.55,
      "High": 12230.4,
      "Low": 12227.8,
      "Close": 12229.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.37.00",
      "TimeDecimal": 13.37,
      "Open": 12229.1,
      "High": 12230.7,
      "Low": 12228.2,
      "Close": 12230.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.38.00",
      "TimeDecimal": 13.38,
      "Open": 12229.8,
      "High": 12231.05,
      "Low": 12228.85,
      "Close": 12228.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.39.00",
      "TimeDecimal": 13.39,
      "Open": 12228.55,
      "High": 12230.75,
      "Low": 12228.45,
      "Close": 12230.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.40.00",
      "TimeDecimal": 13.4,
      "Open": 12230.25,
      "High": 12230.7,
      "Low": 12227.8,
      "Close": 12230.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.41.00",
      "TimeDecimal": 13.41,
      "Open": 12230.1,
      "High": 12230.45,
      "Low": 12228.6,
      "Close": 12229.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.42.00",
      "TimeDecimal": 13.42,
      "Open": 12229.45,
      "High": 12230.35,
      "Low": 12227.3,
      "Close": 12230
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.43.00",
      "TimeDecimal": 13.43,
      "Open": 12229,
      "High": 12231.8,
      "Low": 12229,
      "Close": 12231.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.44.00",
      "TimeDecimal": 13.44,
      "Open": 12231,
      "High": 12231.2,
      "Low": 12229.75,
      "Close": 12230.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.45.00",
      "TimeDecimal": 13.45,
      "Open": 12230.45,
      "High": 12230.85,
      "Low": 12224.1,
      "Close": 12225.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.46.00",
      "TimeDecimal": 13.46,
      "Open": 12224.9,
      "High": 12225.2,
      "Low": 12221.65,
      "Close": 12222.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.47.00",
      "TimeDecimal": 13.47,
      "Open": 12222.35,
      "High": 12224.3,
      "Low": 12222,
      "Close": 12224.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.48.00",
      "TimeDecimal": 13.48,
      "Open": 12224.45,
      "High": 12226.3,
      "Low": 12222.55,
      "Close": 12222.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.49.00",
      "TimeDecimal": 13.49,
      "Open": 12222.95,
      "High": 12223.4,
      "Low": 12220.75,
      "Close": 12222.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.50.00",
      "TimeDecimal": 13.5,
      "Open": 12223.9,
      "High": 12224.45,
      "Low": 12221.65,
      "Close": 12223.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.51.00",
      "TimeDecimal": 13.51,
      "Open": 12222.95,
      "High": 12225.05,
      "Low": 12220.5,
      "Close": 12222.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.52.00",
      "TimeDecimal": 13.52,
      "Open": 12222.3,
      "High": 12222.55,
      "Low": 12219.5,
      "Close": 12220.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.53.00",
      "TimeDecimal": 13.53,
      "Open": 12220.15,
      "High": 12221.35,
      "Low": 12219.85,
      "Close": 12220.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.54.00",
      "TimeDecimal": 13.54,
      "Open": 12220.75,
      "High": 12222.1,
      "Low": 12220.25,
      "Close": 12220.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.55.00",
      "TimeDecimal": 13.55,
      "Open": 12221.15,
      "High": 12221.75,
      "Low": 12220.05,
      "Close": 12220.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.56.00",
      "TimeDecimal": 13.56,
      "Open": 12220.7,
      "High": 12225.3,
      "Low": 12220.45,
      "Close": 12224.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.57.00",
      "TimeDecimal": 13.57,
      "Open": 12225.05,
      "High": 12225.95,
      "Low": 12224.45,
      "Close": 12225.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.58.00",
      "TimeDecimal": 13.58,
      "Open": 12225.5,
      "High": 12227.05,
      "Low": 12224.45,
      "Close": 12227.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "13.59.00",
      "TimeDecimal": 13.59,
      "Open": 12227.15,
      "High": 12227.15,
      "Low": 12224.55,
      "Close": 12225.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.00.00",
      "TimeDecimal": 14,
      "Open": 12225.25,
      "High": 12226.65,
      "Low": 12224.9,
      "Close": 12225.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.01.00",
      "TimeDecimal": 14.01,
      "Open": 12225.75,
      "High": 12226.2,
      "Low": 12225,
      "Close": 12226.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.02.00",
      "TimeDecimal": 14.02,
      "Open": 12225.95,
      "High": 12226.3,
      "Low": 12223.1,
      "Close": 12223.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.03.00",
      "TimeDecimal": 14.03,
      "Open": 12222.85,
      "High": 12224.1,
      "Low": 12221.8,
      "Close": 12223.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.04.00",
      "TimeDecimal": 14.04,
      "Open": 12222.5,
      "High": 12223.4,
      "Low": 12221.75,
      "Close": 12222.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.05.00",
      "TimeDecimal": 14.05,
      "Open": 12222.85,
      "High": 12222.85,
      "Low": 12218.7,
      "Close": 12219.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.06.00",
      "TimeDecimal": 14.06,
      "Open": 12219.55,
      "High": 12219.65,
      "Low": 12218.15,
      "Close": 12218.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.07.00",
      "TimeDecimal": 14.07,
      "Open": 12218.35,
      "High": 12218.8,
      "Low": 12217.35,
      "Close": 12218.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.08.00",
      "TimeDecimal": 14.08,
      "Open": 12218.5,
      "High": 12218.55,
      "Low": 12214.55,
      "Close": 12215.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.09.00",
      "TimeDecimal": 14.09,
      "Open": 12214.65,
      "High": 12215.8,
      "Low": 12214.3,
      "Close": 12215.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.10.00",
      "TimeDecimal": 14.1,
      "Open": 12215.5,
      "High": 12222.4,
      "Low": 12214.85,
      "Close": 12220.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.11.00",
      "TimeDecimal": 14.11,
      "Open": 12220.85,
      "High": 12220.85,
      "Low": 12218.75,
      "Close": 12219.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.12.00",
      "TimeDecimal": 14.12,
      "Open": 12219.5,
      "High": 12220.15,
      "Low": 12217.75,
      "Close": 12218.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.13.00",
      "TimeDecimal": 14.13,
      "Open": 12218.05,
      "High": 12219.6,
      "Low": 12217.6,
      "Close": 12217.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.14.00",
      "TimeDecimal": 14.14,
      "Open": 12218.15,
      "High": 12218.7,
      "Low": 12215.3,
      "Close": 12216.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.15.00",
      "TimeDecimal": 14.15,
      "Open": 12216.4,
      "High": 12217,
      "Low": 12214.05,
      "Close": 12214.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.16.00",
      "TimeDecimal": 14.16,
      "Open": 12214.55,
      "High": 12215,
      "Low": 12211.35,
      "Close": 12212.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.17.00",
      "TimeDecimal": 14.17,
      "Open": 12212.25,
      "High": 12215.35,
      "Low": 12212.1,
      "Close": 12213.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.18.00",
      "TimeDecimal": 14.18,
      "Open": 12213.3,
      "High": 12214.8,
      "Low": 12213,
      "Close": 12214.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.19.00",
      "TimeDecimal": 14.19,
      "Open": 12214.7,
      "High": 12216.65,
      "Low": 12214,
      "Close": 12214.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.20.00",
      "TimeDecimal": 14.2,
      "Open": 12213.95,
      "High": 12215.2,
      "Low": 12213.05,
      "Close": 12215.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.21.00",
      "TimeDecimal": 14.21,
      "Open": 12214.7,
      "High": 12218.5,
      "Low": 12214.5,
      "Close": 12217.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.22.00",
      "TimeDecimal": 14.22,
      "Open": 12218.45,
      "High": 12219,
      "Low": 12216.7,
      "Close": 12217.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.23.00",
      "TimeDecimal": 14.23,
      "Open": 12218,
      "High": 12218.55,
      "Low": 12215.4,
      "Close": 12216
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.24.00",
      "TimeDecimal": 14.24,
      "Open": 12215.85,
      "High": 12216.05,
      "Low": 12212.6,
      "Close": 12212.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.25.00",
      "TimeDecimal": 14.25,
      "Open": 12213.4,
      "High": 12213.45,
      "Low": 12208.65,
      "Close": 12210.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.26.00",
      "TimeDecimal": 14.26,
      "Open": 12210.15,
      "High": 12210.4,
      "Low": 12207.7,
      "Close": 12207.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.27.00",
      "TimeDecimal": 14.27,
      "Open": 12207.35,
      "High": 12207.7,
      "Low": 12205.55,
      "Close": 12206
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.28.00",
      "TimeDecimal": 14.28,
      "Open": 12205.95,
      "High": 12207.65,
      "Low": 12205.95,
      "Close": 12207.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.29.00",
      "TimeDecimal": 14.29,
      "Open": 12207.45,
      "High": 12212.25,
      "Low": 12206.55,
      "Close": 12211.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.30.00",
      "TimeDecimal": 14.3,
      "Open": 12211.65,
      "High": 12213.45,
      "Low": 12211.55,
      "Close": 12212.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.31.00",
      "TimeDecimal": 14.31,
      "Open": 12212.6,
      "High": 12212.95,
      "Low": 12209.85,
      "Close": 12210.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.32.00",
      "TimeDecimal": 14.32,
      "Open": 12210.2,
      "High": 12210.2,
      "Low": 12207.05,
      "Close": 12208.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.33.00",
      "TimeDecimal": 14.33,
      "Open": 12208.25,
      "High": 12210.1,
      "Low": 12206.55,
      "Close": 12208.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.34.00",
      "TimeDecimal": 14.34,
      "Open": 12208.9,
      "High": 12211.6,
      "Low": 12208.3,
      "Close": 12210.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.35.00",
      "TimeDecimal": 14.35,
      "Open": 12210.35,
      "High": 12211.6,
      "Low": 12209.9,
      "Close": 12210.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.36.00",
      "TimeDecimal": 14.36,
      "Open": 12210.3,
      "High": 12212.9,
      "Low": 12210.1,
      "Close": 12212.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.37.00",
      "TimeDecimal": 14.37,
      "Open": 12212.65,
      "High": 12222.8,
      "Low": 12211.55,
      "Close": 12221.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.38.00",
      "TimeDecimal": 14.38,
      "Open": 12221.25,
      "High": 12222.6,
      "Low": 12218.7,
      "Close": 12220.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.39.00",
      "TimeDecimal": 14.39,
      "Open": 12220,
      "High": 12220.9,
      "Low": 12216.35,
      "Close": 12216.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.40.00",
      "TimeDecimal": 14.4,
      "Open": 12216.55,
      "High": 12216.65,
      "Low": 12213.5,
      "Close": 12214.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.41.00",
      "TimeDecimal": 14.41,
      "Open": 12213.95,
      "High": 12214.2,
      "Low": 12212.3,
      "Close": 12213.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.42.00",
      "TimeDecimal": 14.42,
      "Open": 12213.6,
      "High": 12214.5,
      "Low": 12210.65,
      "Close": 12210.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.43.00",
      "TimeDecimal": 14.43,
      "Open": 12210.7,
      "High": 12211.1,
      "Low": 12209.1,
      "Close": 12209.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.44.00",
      "TimeDecimal": 14.44,
      "Open": 12209.3,
      "High": 12209.45,
      "Low": 12206.6,
      "Close": 12207.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.45.00",
      "TimeDecimal": 14.45,
      "Open": 12207.7,
      "High": 12208.6,
      "Low": 12206.25,
      "Close": 12206.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.46.00",
      "TimeDecimal": 14.46,
      "Open": 12206.25,
      "High": 12207.55,
      "Low": 12205.5,
      "Close": 12206.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.47.00",
      "TimeDecimal": 14.47,
      "Open": 12206.25,
      "High": 12206.25,
      "Low": 12202.8,
      "Close": 12203.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.48.00",
      "TimeDecimal": 14.48,
      "Open": 12203.65,
      "High": 12205.5,
      "Low": 12202.9,
      "Close": 12204.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.49.00",
      "TimeDecimal": 14.49,
      "Open": 12204,
      "High": 12204.45,
      "Low": 12201.85,
      "Close": 12203.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.50.00",
      "TimeDecimal": 14.5,
      "Open": 12203.35,
      "High": 12205.55,
      "Low": 12203.15,
      "Close": 12204.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.51.00",
      "TimeDecimal": 14.51,
      "Open": 12205,
      "High": 12205,
      "Low": 12195.15,
      "Close": 12197.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.52.00",
      "TimeDecimal": 14.52,
      "Open": 12196.8,
      "High": 12197.8,
      "Low": 12194.05,
      "Close": 12195.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.53.00",
      "TimeDecimal": 14.53,
      "Open": 12195.4,
      "High": 12197.15,
      "Low": 12193.4,
      "Close": 12195.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.54.00",
      "TimeDecimal": 14.54,
      "Open": 12195.55,
      "High": 12196.95,
      "Low": 12192.6,
      "Close": 12193.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.55.00",
      "TimeDecimal": 14.55,
      "Open": 12193.35,
      "High": 12196.7,
      "Low": 12191.35,
      "Close": 12196
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.56.00",
      "TimeDecimal": 14.56,
      "Open": 12196.55,
      "High": 12198.8,
      "Low": 12196.1,
      "Close": 12196.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.57.00",
      "TimeDecimal": 14.57,
      "Open": 12196.8,
      "High": 12198.6,
      "Low": 12195.65,
      "Close": 12197.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.58.00",
      "TimeDecimal": 14.58,
      "Open": 12197.25,
      "High": 12197.25,
      "Low": 12193.6,
      "Close": 12193.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "14.59.00",
      "TimeDecimal": 14.59,
      "Open": 12193.25,
      "High": 12194.4,
      "Low": 12192.4,
      "Close": 12193.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.00.00",
      "TimeDecimal": 15,
      "Open": 12193.7,
      "High": 12197.1,
      "Low": 12193.15,
      "Close": 12197.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.01.00",
      "TimeDecimal": 15.01,
      "Open": 12196.9,
      "High": 12213.15,
      "Low": 12196.6,
      "Close": 12212.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.02.00",
      "TimeDecimal": 15.02,
      "Open": 12212.35,
      "High": 12216.65,
      "Low": 12212.2,
      "Close": 12216.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.03.00",
      "TimeDecimal": 15.03,
      "Open": 12216.35,
      "High": 12218,
      "Low": 12216,
      "Close": 12216.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.04.00",
      "TimeDecimal": 15.04,
      "Open": 12215.95,
      "High": 12220.9,
      "Low": 12215.45,
      "Close": 12220.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.05.00",
      "TimeDecimal": 15.05,
      "Open": 12220.4,
      "High": 12222.15,
      "Low": 12219.3,
      "Close": 12220.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.06.00",
      "TimeDecimal": 15.06,
      "Open": 12220.35,
      "High": 12230.35,
      "Low": 12220.15,
      "Close": 12230.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.07.00",
      "TimeDecimal": 15.07,
      "Open": 12230,
      "High": 12231.05,
      "Low": 12226.1,
      "Close": 12227
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.08.00",
      "TimeDecimal": 15.08,
      "Open": 12226.65,
      "High": 12228.1,
      "Low": 12226.5,
      "Close": 12227.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.09.00",
      "TimeDecimal": 15.09,
      "Open": 12227.65,
      "High": 12233.45,
      "Low": 12226.5,
      "Close": 12233.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.10.00",
      "TimeDecimal": 15.1,
      "Open": 12233.4,
      "High": 12234.05,
      "Low": 12230.15,
      "Close": 12230.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.11.00",
      "TimeDecimal": 15.11,
      "Open": 12230.65,
      "High": 12231.5,
      "Low": 12227.85,
      "Close": 12228.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.12.00",
      "TimeDecimal": 15.12,
      "Open": 12228.55,
      "High": 12229.15,
      "Low": 12223.45,
      "Close": 12225.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.13.00",
      "TimeDecimal": 15.13,
      "Open": 12225.65,
      "High": 12227.95,
      "Low": 12225.2,
      "Close": 12227.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.14.00",
      "TimeDecimal": 15.14,
      "Open": 12227.2,
      "High": 12228.2,
      "Low": 12226.15,
      "Close": 12228.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.15.00",
      "TimeDecimal": 15.15,
      "Open": 12228.3,
      "High": 12228.7,
      "Low": 12226.35,
      "Close": 12227
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.16.00",
      "TimeDecimal": 15.16,
      "Open": 12226.6,
      "High": 12232.2,
      "Low": 12226.6,
      "Close": 12231.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.17.00",
      "TimeDecimal": 15.17,
      "Open": 12231.35,
      "High": 12231.6,
      "Low": 12226.85,
      "Close": 12228.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.18.00",
      "TimeDecimal": 15.18,
      "Open": 12228.55,
      "High": 12230.5,
      "Low": 12227.25,
      "Close": 12230.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.19.00",
      "TimeDecimal": 15.19,
      "Open": 12230.95,
      "High": 12232.2,
      "Low": 12229.85,
      "Close": 12230.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.20.00",
      "TimeDecimal": 15.2,
      "Open": 12229.65,
      "High": 12230.9,
      "Low": 12227.05,
      "Close": 12228
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.21.00",
      "TimeDecimal": 15.21,
      "Open": 12227.7,
      "High": 12230.75,
      "Low": 12227.35,
      "Close": 12229.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.22.00",
      "TimeDecimal": 15.22,
      "Open": 12228.6,
      "High": 12230.4,
      "Low": 12225.15,
      "Close": 12227.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.23.00",
      "TimeDecimal": 15.23,
      "Open": 12227.55,
      "High": 12229.9,
      "Low": 12227.05,
      "Close": 12228.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.24.00",
      "TimeDecimal": 15.24,
      "Open": 12228.7,
      "High": 12231.45,
      "Low": 12227.25,
      "Close": 12231.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.25.00",
      "TimeDecimal": 15.25,
      "Open": 12231.35,
      "High": 12232.7,
      "Low": 12230.5,
      "Close": 12231.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.26.00",
      "TimeDecimal": 15.26,
      "Open": 12232,
      "High": 12232.65,
      "Low": 12229.95,
      "Close": 12230.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.27.00",
      "TimeDecimal": 15.27,
      "Open": 12230.35,
      "High": 12231.4,
      "Low": 12229.65,
      "Close": 12230.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.28.00",
      "TimeDecimal": 15.28,
      "Open": 12230.95,
      "High": 12231.4,
      "Low": 12229.5,
      "Close": 12230.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.29.00",
      "TimeDecimal": 15.29,
      "Open": 12231,
      "High": 12231,
      "Low": 12227.95,
      "Close": 12229.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.30.00",
      "TimeDecimal": 15.3,
      "Open": 12229,
      "High": 12229.45,
      "Low": 12222.2,
      "Close": 12222.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.31.00",
      "TimeDecimal": 15.31,
      "Open": 12223.8,
      "High": 12223.8,
      "Low": 12223.8,
      "Close": 12223.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "15.33.00",
      "TimeDecimal": 15.33,
      "Open": 12224.7,
      "High": 12226.65,
      "Low": 12224.7,
      "Close": 12226.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200103,
      "Time": "16.39.00",
      "TimeDecimal": 16.39,
      "Open": 12226.65,
      "High": 12226.65,
      "Low": 12226.65,
      "Close": 12226.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.08.00",
      "TimeDecimal": 9.08,
      "Open": 12170.6,
      "High": 12170.6,
      "Low": 12170.6,
      "Close": 12170.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.16.00",
      "TimeDecimal": 9.16,
      "Open": 12176.95,
      "High": 12179.1,
      "Low": 12146.05,
      "Close": 12147.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.17.00",
      "TimeDecimal": 9.17,
      "Open": 12145.8,
      "High": 12146.7,
      "Low": 12130.1,
      "Close": 12133.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.18.00",
      "TimeDecimal": 9.18,
      "Open": 12134.1,
      "High": 12139.2,
      "Low": 12134.1,
      "Close": 12138.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.19.00",
      "TimeDecimal": 9.19,
      "Open": 12137.75,
      "High": 12146.3,
      "Low": 12137.75,
      "Close": 12145.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.20.00",
      "TimeDecimal": 9.2,
      "Open": 12145.95,
      "High": 12146.2,
      "Low": 12139.8,
      "Close": 12139.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.21.00",
      "TimeDecimal": 9.21,
      "Open": 12140.5,
      "High": 12140.85,
      "Low": 12132.2,
      "Close": 12133.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.22.00",
      "TimeDecimal": 9.22,
      "Open": 12132.85,
      "High": 12133.35,
      "Low": 12123.4,
      "Close": 12123.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.23.00",
      "TimeDecimal": 9.23,
      "Open": 12123.6,
      "High": 12123.6,
      "Low": 12118.2,
      "Close": 12119.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.24.00",
      "TimeDecimal": 9.24,
      "Open": 12118.7,
      "High": 12118.7,
      "Low": 12112.2,
      "Close": 12114.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.25.00",
      "TimeDecimal": 9.25,
      "Open": 12114.1,
      "High": 12120.15,
      "Low": 12111.25,
      "Close": 12118.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.26.00",
      "TimeDecimal": 9.26,
      "Open": 12118.1,
      "High": 12124.15,
      "Low": 12117.75,
      "Close": 12122.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.27.00",
      "TimeDecimal": 9.27,
      "Open": 12123.05,
      "High": 12123.6,
      "Low": 12117.4,
      "Close": 12117.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.28.00",
      "TimeDecimal": 9.28,
      "Open": 12118,
      "High": 12119.3,
      "Low": 12114.6,
      "Close": 12115.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.29.00",
      "TimeDecimal": 9.29,
      "Open": 12115.3,
      "High": 12116.25,
      "Low": 12102.85,
      "Close": 12103.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.30.00",
      "TimeDecimal": 9.3,
      "Open": 12102.95,
      "High": 12102.95,
      "Low": 12095.45,
      "Close": 12096.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.31.00",
      "TimeDecimal": 9.31,
      "Open": 12096.9,
      "High": 12096.9,
      "Low": 12073.85,
      "Close": 12074.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.32.00",
      "TimeDecimal": 9.32,
      "Open": 12073.55,
      "High": 12088.25,
      "Low": 12069.1,
      "Close": 12088.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.33.00",
      "TimeDecimal": 9.33,
      "Open": 12091.9,
      "High": 12094.6,
      "Low": 12086.75,
      "Close": 12087.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.34.00",
      "TimeDecimal": 9.34,
      "Open": 12087.1,
      "High": 12091.25,
      "Low": 12086.05,
      "Close": 12087
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.35.00",
      "TimeDecimal": 9.35,
      "Open": 12087.75,
      "High": 12088.65,
      "Low": 12084.95,
      "Close": 12085.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.36.00",
      "TimeDecimal": 9.36,
      "Open": 12085.5,
      "High": 12085.5,
      "Low": 12079.9,
      "Close": 12080.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.37.00",
      "TimeDecimal": 9.37,
      "Open": 12080.4,
      "High": 12085.2,
      "Low": 12077.75,
      "Close": 12083.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.38.00",
      "TimeDecimal": 9.38,
      "Open": 12083.9,
      "High": 12089.7,
      "Low": 12083.6,
      "Close": 12089.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.39.00",
      "TimeDecimal": 9.39,
      "Open": 12089.75,
      "High": 12099,
      "Low": 12089.05,
      "Close": 12096.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.40.00",
      "TimeDecimal": 9.4,
      "Open": 12095.5,
      "High": 12096.6,
      "Low": 12093.3,
      "Close": 12093.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.41.00",
      "TimeDecimal": 9.41,
      "Open": 12094.1,
      "High": 12094.1,
      "Low": 12085.55,
      "Close": 12086.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.42.00",
      "TimeDecimal": 9.42,
      "Open": 12085.85,
      "High": 12088.35,
      "Low": 12083.75,
      "Close": 12083.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.43.00",
      "TimeDecimal": 9.43,
      "Open": 12084.3,
      "High": 12084.9,
      "Low": 12077.8,
      "Close": 12082.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.44.00",
      "TimeDecimal": 9.44,
      "Open": 12082.3,
      "High": 12086.05,
      "Low": 12082.3,
      "Close": 12084.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.45.00",
      "TimeDecimal": 9.45,
      "Open": 12083.6,
      "High": 12085.15,
      "Low": 12080.15,
      "Close": 12083
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.46.00",
      "TimeDecimal": 9.46,
      "Open": 12081.85,
      "High": 12081.85,
      "Low": 12078.6,
      "Close": 12080.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.47.00",
      "TimeDecimal": 9.47,
      "Open": 12080.2,
      "High": 12081.65,
      "Low": 12078.7,
      "Close": 12080
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.48.00",
      "TimeDecimal": 9.48,
      "Open": 12078.05,
      "High": 12081.4,
      "Low": 12076.6,
      "Close": 12081.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.49.00",
      "TimeDecimal": 9.49,
      "Open": 12082.3,
      "High": 12083.05,
      "Low": 12079.85,
      "Close": 12081.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.50.00",
      "TimeDecimal": 9.5,
      "Open": 12082.25,
      "High": 12082.25,
      "Low": 12071.85,
      "Close": 12071.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.51.00",
      "TimeDecimal": 9.51,
      "Open": 12071.75,
      "High": 12071.95,
      "Low": 12062.85,
      "Close": 12064.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.52.00",
      "TimeDecimal": 9.52,
      "Open": 12064.15,
      "High": 12071.05,
      "Low": 12063.25,
      "Close": 12071.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.53.00",
      "TimeDecimal": 9.53,
      "Open": 12070.55,
      "High": 12075.5,
      "Low": 12069.7,
      "Close": 12075.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.54.00",
      "TimeDecimal": 9.54,
      "Open": 12074.7,
      "High": 12081.15,
      "Low": 12074.7,
      "Close": 12081.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.55.00",
      "TimeDecimal": 9.55,
      "Open": 12080.55,
      "High": 12085.6,
      "Low": 12080.2,
      "Close": 12084.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.56.00",
      "TimeDecimal": 9.56,
      "Open": 12084.3,
      "High": 12086.45,
      "Low": 12083.5,
      "Close": 12085.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.57.00",
      "TimeDecimal": 9.57,
      "Open": 12085.5,
      "High": 12085.5,
      "Low": 12081.8,
      "Close": 12082.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.58.00",
      "TimeDecimal": 9.58,
      "Open": 12082.9,
      "High": 12087.15,
      "Low": 12080.75,
      "Close": 12086.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "09.59.00",
      "TimeDecimal": 9.59,
      "Open": 12086.1,
      "High": 12094.55,
      "Low": 12085.25,
      "Close": 12094.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.00.00",
      "TimeDecimal": 10,
      "Open": 12093.85,
      "High": 12096.35,
      "Low": 12093.1,
      "Close": 12096.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.01.00",
      "TimeDecimal": 10.01,
      "Open": 12096.25,
      "High": 12096.5,
      "Low": 12094.2,
      "Close": 12094.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.02.00",
      "TimeDecimal": 10.02,
      "Open": 12094.1,
      "High": 12094.1,
      "Low": 12091.15,
      "Close": 12091.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.03.00",
      "TimeDecimal": 10.03,
      "Open": 12091.25,
      "High": 12091.4,
      "Low": 12087.45,
      "Close": 12087.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.04.00",
      "TimeDecimal": 10.04,
      "Open": 12085.95,
      "High": 12090,
      "Low": 12085.75,
      "Close": 12089.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.05.00",
      "TimeDecimal": 10.05,
      "Open": 12089.5,
      "High": 12091.45,
      "Low": 12088.5,
      "Close": 12090.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.06.00",
      "TimeDecimal": 10.06,
      "Open": 12091.45,
      "High": 12091.9,
      "Low": 12090.05,
      "Close": 12091.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.07.00",
      "TimeDecimal": 10.07,
      "Open": 12091.2,
      "High": 12093.7,
      "Low": 12090.6,
      "Close": 12093.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.08.00",
      "TimeDecimal": 10.08,
      "Open": 12093.85,
      "High": 12095.2,
      "Low": 12092.5,
      "Close": 12094.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.09.00",
      "TimeDecimal": 10.09,
      "Open": 12094.3,
      "High": 12096.35,
      "Low": 12093.85,
      "Close": 12095.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.10.00",
      "TimeDecimal": 10.1,
      "Open": 12095.3,
      "High": 12096,
      "Low": 12093.9,
      "Close": 12094.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.11.00",
      "TimeDecimal": 10.11,
      "Open": 12093.95,
      "High": 12094.05,
      "Low": 12089.35,
      "Close": 12089.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.12.00",
      "TimeDecimal": 10.12,
      "Open": 12090.15,
      "High": 12090.15,
      "Low": 12085,
      "Close": 12089.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.13.00",
      "TimeDecimal": 10.13,
      "Open": 12089.3,
      "High": 12089.8,
      "Low": 12087.1,
      "Close": 12087.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.14.00",
      "TimeDecimal": 10.14,
      "Open": 12087.6,
      "High": 12088.65,
      "Low": 12087,
      "Close": 12088.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.15.00",
      "TimeDecimal": 10.15,
      "Open": 12088.1,
      "High": 12088.3,
      "Low": 12086.75,
      "Close": 12087.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.16.00",
      "TimeDecimal": 10.16,
      "Open": 12086.8,
      "High": 12088,
      "Low": 12085.65,
      "Close": 12086.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.17.00",
      "TimeDecimal": 10.17,
      "Open": 12086.35,
      "High": 12087.15,
      "Low": 12084.85,
      "Close": 12086.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.18.00",
      "TimeDecimal": 10.18,
      "Open": 12086.5,
      "High": 12086.5,
      "Low": 12081.25,
      "Close": 12082.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.19.00",
      "TimeDecimal": 10.19,
      "Open": 12082.95,
      "High": 12084.15,
      "Low": 12080.55,
      "Close": 12082.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.20.00",
      "TimeDecimal": 10.2,
      "Open": 12082.1,
      "High": 12084.4,
      "Low": 12082.1,
      "Close": 12082.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.21.00",
      "TimeDecimal": 10.21,
      "Open": 12082.55,
      "High": 12083,
      "Low": 12080.95,
      "Close": 12082.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.22.00",
      "TimeDecimal": 10.22,
      "Open": 12082.75,
      "High": 12083.05,
      "Low": 12081.25,
      "Close": 12082.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.23.00",
      "TimeDecimal": 10.23,
      "Open": 12082.45,
      "High": 12083.1,
      "Low": 12080.05,
      "Close": 12080.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.24.00",
      "TimeDecimal": 10.24,
      "Open": 12080.35,
      "High": 12081.55,
      "Low": 12077.75,
      "Close": 12080.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.25.00",
      "TimeDecimal": 10.25,
      "Open": 12081,
      "High": 12081.4,
      "Low": 12079.25,
      "Close": 12079.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.26.00",
      "TimeDecimal": 10.26,
      "Open": 12079.45,
      "High": 12080,
      "Low": 12075.1,
      "Close": 12075.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.27.00",
      "TimeDecimal": 10.27,
      "Open": 12075.05,
      "High": 12075.7,
      "Low": 12073.6,
      "Close": 12075.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.28.00",
      "TimeDecimal": 10.28,
      "Open": 12075.4,
      "High": 12079.75,
      "Low": 12074.65,
      "Close": 12079.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.29.00",
      "TimeDecimal": 10.29,
      "Open": 12079.4,
      "High": 12081.5,
      "Low": 12079.25,
      "Close": 12081.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.30.00",
      "TimeDecimal": 10.3,
      "Open": 12081.35,
      "High": 12082.6,
      "Low": 12080.05,
      "Close": 12081.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.31.00",
      "TimeDecimal": 10.31,
      "Open": 12081.5,
      "High": 12086,
      "Low": 12081.3,
      "Close": 12086
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.32.00",
      "TimeDecimal": 10.32,
      "Open": 12086.45,
      "High": 12091.85,
      "Low": 12086.15,
      "Close": 12091.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.33.00",
      "TimeDecimal": 10.33,
      "Open": 12091.2,
      "High": 12095.9,
      "Low": 12091.2,
      "Close": 12094.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.34.00",
      "TimeDecimal": 10.34,
      "Open": 12094.1,
      "High": 12098.45,
      "Low": 12093.85,
      "Close": 12097.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.35.00",
      "TimeDecimal": 10.35,
      "Open": 12097.7,
      "High": 12097.9,
      "Low": 12094.4,
      "Close": 12094.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.36.00",
      "TimeDecimal": 10.36,
      "Open": 12094.85,
      "High": 12095.35,
      "Low": 12092.9,
      "Close": 12092.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.37.00",
      "TimeDecimal": 10.37,
      "Open": 12092.85,
      "High": 12093.8,
      "Low": 12089.9,
      "Close": 12091.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.38.00",
      "TimeDecimal": 10.38,
      "Open": 12089.65,
      "High": 12092.4,
      "Low": 12089.65,
      "Close": 12092.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.39.00",
      "TimeDecimal": 10.39,
      "Open": 12091.45,
      "High": 12093.65,
      "Low": 12090.9,
      "Close": 12093
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.40.00",
      "TimeDecimal": 10.4,
      "Open": 12094.05,
      "High": 12096.45,
      "Low": 12093.2,
      "Close": 12096.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.41.00",
      "TimeDecimal": 10.41,
      "Open": 12095.55,
      "High": 12096.55,
      "Low": 12094.55,
      "Close": 12095.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.42.00",
      "TimeDecimal": 10.42,
      "Open": 12094.5,
      "High": 12095.25,
      "Low": 12090.8,
      "Close": 12091.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.43.00",
      "TimeDecimal": 10.43,
      "Open": 12091.5,
      "High": 12092,
      "Low": 12089.65,
      "Close": 12090.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.44.00",
      "TimeDecimal": 10.44,
      "Open": 12089.7,
      "High": 12091.85,
      "Low": 12089.7,
      "Close": 12091.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.45.00",
      "TimeDecimal": 10.45,
      "Open": 12091.05,
      "High": 12092.55,
      "Low": 12090.5,
      "Close": 12092.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.46.00",
      "TimeDecimal": 10.46,
      "Open": 12091.05,
      "High": 12091.85,
      "Low": 12090.2,
      "Close": 12090.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.47.00",
      "TimeDecimal": 10.47,
      "Open": 12089.7,
      "High": 12090.9,
      "Low": 12083.35,
      "Close": 12084.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.48.00",
      "TimeDecimal": 10.48,
      "Open": 12083.4,
      "High": 12085,
      "Low": 12082.6,
      "Close": 12083.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.49.00",
      "TimeDecimal": 10.49,
      "Open": 12083.4,
      "High": 12083.4,
      "Low": 12080.45,
      "Close": 12080.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.50.00",
      "TimeDecimal": 10.5,
      "Open": 12080.3,
      "High": 12080.7,
      "Low": 12077.95,
      "Close": 12080.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.51.00",
      "TimeDecimal": 10.51,
      "Open": 12079.25,
      "High": 12085.45,
      "Low": 12079.25,
      "Close": 12084.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.52.00",
      "TimeDecimal": 10.52,
      "Open": 12084.3,
      "High": 12085.85,
      "Low": 12083.4,
      "Close": 12083.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.53.00",
      "TimeDecimal": 10.53,
      "Open": 12082.9,
      "High": 12083.6,
      "Low": 12079.2,
      "Close": 12082.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.54.00",
      "TimeDecimal": 10.54,
      "Open": 12081.5,
      "High": 12083.6,
      "Low": 12081.5,
      "Close": 12083.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.55.00",
      "TimeDecimal": 10.55,
      "Open": 12082.95,
      "High": 12084.3,
      "Low": 12080.95,
      "Close": 12081.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.56.00",
      "TimeDecimal": 10.56,
      "Open": 12080.45,
      "High": 12082.65,
      "Low": 12079.85,
      "Close": 12082.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.57.00",
      "TimeDecimal": 10.57,
      "Open": 12081,
      "High": 12083.85,
      "Low": 12081,
      "Close": 12083.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.58.00",
      "TimeDecimal": 10.58,
      "Open": 12082.9,
      "High": 12083.85,
      "Low": 12081.05,
      "Close": 12081.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "10.59.00",
      "TimeDecimal": 10.59,
      "Open": 12081,
      "High": 12081.55,
      "Low": 12079.35,
      "Close": 12080.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.00.00",
      "TimeDecimal": 11,
      "Open": 12079.25,
      "High": 12080.1,
      "Low": 12076.3,
      "Close": 12079.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.01.00",
      "TimeDecimal": 11.01,
      "Open": 12079.05,
      "High": 12079.05,
      "Low": 12075.45,
      "Close": 12075.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.02.00",
      "TimeDecimal": 11.02,
      "Open": 12074.55,
      "High": 12075.1,
      "Low": 12071.8,
      "Close": 12071.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.03.00",
      "TimeDecimal": 11.03,
      "Open": 12070.8,
      "High": 12072.05,
      "Low": 12069.05,
      "Close": 12071.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.04.00",
      "TimeDecimal": 11.04,
      "Open": 12071.05,
      "High": 12072.85,
      "Low": 12070.2,
      "Close": 12072.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.05.00",
      "TimeDecimal": 11.05,
      "Open": 12072.65,
      "High": 12074.4,
      "Low": 12072.35,
      "Close": 12072.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.06.00",
      "TimeDecimal": 11.06,
      "Open": 12072.8,
      "High": 12073.85,
      "Low": 12072.05,
      "Close": 12073.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.07.00",
      "TimeDecimal": 11.07,
      "Open": 12072.9,
      "High": 12073.9,
      "Low": 12071.65,
      "Close": 12073.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.08.00",
      "TimeDecimal": 11.08,
      "Open": 12073.4,
      "High": 12076.5,
      "Low": 12073.4,
      "Close": 12076.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.09.00",
      "TimeDecimal": 11.09,
      "Open": 12075.2,
      "High": 12076.65,
      "Low": 12073.65,
      "Close": 12074.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.10.00",
      "TimeDecimal": 11.1,
      "Open": 12074.2,
      "High": 12075.1,
      "Low": 12073,
      "Close": 12073
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.11.00",
      "TimeDecimal": 11.11,
      "Open": 12072.1,
      "High": 12073.4,
      "Low": 12070.9,
      "Close": 12071.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.12.00",
      "TimeDecimal": 11.12,
      "Open": 12071.25,
      "High": 12072.55,
      "Low": 12070.4,
      "Close": 12072.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.13.00",
      "TimeDecimal": 11.13,
      "Open": 12072.15,
      "High": 12072.9,
      "Low": 12071.4,
      "Close": 12072.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.14.00",
      "TimeDecimal": 11.14,
      "Open": 12071.7,
      "High": 12073.7,
      "Low": 12071.2,
      "Close": 12073.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.15.00",
      "TimeDecimal": 11.15,
      "Open": 12072.55,
      "High": 12073.25,
      "Low": 12070.8,
      "Close": 12071.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.16.00",
      "TimeDecimal": 11.16,
      "Open": 12070.7,
      "High": 12071.45,
      "Low": 12065.2,
      "Close": 12066.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.17.00",
      "TimeDecimal": 11.17,
      "Open": 12066.05,
      "High": 12068.05,
      "Low": 12065.95,
      "Close": 12067.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.18.00",
      "TimeDecimal": 11.18,
      "Open": 12067,
      "High": 12070.45,
      "Low": 12065.95,
      "Close": 12069.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.19.00",
      "TimeDecimal": 11.19,
      "Open": 12069.45,
      "High": 12070.1,
      "Low": 12068.15,
      "Close": 12069.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.20.00",
      "TimeDecimal": 11.2,
      "Open": 12068.8,
      "High": 12069.4,
      "Low": 12066.25,
      "Close": 12067.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.21.00",
      "TimeDecimal": 11.21,
      "Open": 12066.25,
      "High": 12067.5,
      "Low": 12065.9,
      "Close": 12066.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.22.00",
      "TimeDecimal": 11.22,
      "Open": 12066.25,
      "High": 12066.65,
      "Low": 12063.1,
      "Close": 12064.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.23.00",
      "TimeDecimal": 11.23,
      "Open": 12064.2,
      "High": 12066.3,
      "Low": 12063.4,
      "Close": 12066.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.24.00",
      "TimeDecimal": 11.24,
      "Open": 12065.2,
      "High": 12065.85,
      "Low": 12064.4,
      "Close": 12065.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.25.00",
      "TimeDecimal": 11.25,
      "Open": 12065.2,
      "High": 12065.65,
      "Low": 12061.4,
      "Close": 12062.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.26.00",
      "TimeDecimal": 11.26,
      "Open": 12060.95,
      "High": 12060.95,
      "Low": 12047.2,
      "Close": 12049.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.27.00",
      "TimeDecimal": 11.27,
      "Open": 12049.5,
      "High": 12049.55,
      "Low": 12046.9,
      "Close": 12049.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.28.00",
      "TimeDecimal": 11.28,
      "Open": 12048.55,
      "High": 12049.4,
      "Low": 12045.6,
      "Close": 12048.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.29.00",
      "TimeDecimal": 11.29,
      "Open": 12047.7,
      "High": 12052.25,
      "Low": 12047.65,
      "Close": 12051.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.30.00",
      "TimeDecimal": 11.3,
      "Open": 12050,
      "High": 12050.5,
      "Low": 12043.75,
      "Close": 12044.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.31.00",
      "TimeDecimal": 11.31,
      "Open": 12044.05,
      "High": 12044.7,
      "Low": 12040.75,
      "Close": 12041.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.32.00",
      "TimeDecimal": 11.32,
      "Open": 12041.55,
      "High": 12044.25,
      "Low": 12040,
      "Close": 12044.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.33.00",
      "TimeDecimal": 11.33,
      "Open": 12043.5,
      "High": 12043.95,
      "Low": 12041.25,
      "Close": 12043.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.34.00",
      "TimeDecimal": 11.34,
      "Open": 12043.35,
      "High": 12046.85,
      "Low": 12042.95,
      "Close": 12046.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.35.00",
      "TimeDecimal": 11.35,
      "Open": 12046.5,
      "High": 12050.7,
      "Low": 12046.15,
      "Close": 12049
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.36.00",
      "TimeDecimal": 11.36,
      "Open": 12048.35,
      "High": 12048.9,
      "Low": 12044.4,
      "Close": 12045.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.37.00",
      "TimeDecimal": 11.37,
      "Open": 12044.15,
      "High": 12046.25,
      "Low": 12043.8,
      "Close": 12044.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.38.00",
      "TimeDecimal": 11.38,
      "Open": 12044.85,
      "High": 12046.45,
      "Low": 12043.2,
      "Close": 12043.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.39.00",
      "TimeDecimal": 11.39,
      "Open": 12042.8,
      "High": 12044.4,
      "Low": 12042.45,
      "Close": 12043.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.40.00",
      "TimeDecimal": 11.4,
      "Open": 12043.4,
      "High": 12043.45,
      "Low": 12039.9,
      "Close": 12042.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.41.00",
      "TimeDecimal": 11.41,
      "Open": 12042,
      "High": 12042.85,
      "Low": 12040.7,
      "Close": 12042.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.42.00",
      "TimeDecimal": 11.42,
      "Open": 12041.55,
      "High": 12043.7,
      "Low": 12039.6,
      "Close": 12039.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.43.00",
      "TimeDecimal": 11.43,
      "Open": 12039.55,
      "High": 12040.05,
      "Low": 12035.4,
      "Close": 12036.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.44.00",
      "TimeDecimal": 11.44,
      "Open": 12034.55,
      "High": 12034.75,
      "Low": 12030.95,
      "Close": 12033.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.45.00",
      "TimeDecimal": 11.45,
      "Open": 12032.9,
      "High": 12035,
      "Low": 12032.45,
      "Close": 12033.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.46.00",
      "TimeDecimal": 11.46,
      "Open": 12032.65,
      "High": 12033.55,
      "Low": 12028.4,
      "Close": 12029.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.47.00",
      "TimeDecimal": 11.47,
      "Open": 12029.05,
      "High": 12033.85,
      "Low": 12028.9,
      "Close": 12032.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.48.00",
      "TimeDecimal": 11.48,
      "Open": 12032.5,
      "High": 12034.45,
      "Low": 12030.1,
      "Close": 12030.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.49.00",
      "TimeDecimal": 11.49,
      "Open": 12030.5,
      "High": 12032.65,
      "Low": 12030.35,
      "Close": 12032.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.50.00",
      "TimeDecimal": 11.5,
      "Open": 12031.1,
      "High": 12032.7,
      "Low": 12029.85,
      "Close": 12030.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.51.00",
      "TimeDecimal": 11.51,
      "Open": 12029.6,
      "High": 12029.95,
      "Low": 12027.75,
      "Close": 12029.25
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.52.00",
      "TimeDecimal": 11.52,
      "Open": 12028.5,
      "High": 12029.4,
      "Low": 12027.4,
      "Close": 12029.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.53.00",
      "TimeDecimal": 11.53,
      "Open": 12027.65,
      "High": 12030.9,
      "Low": 12026.7,
      "Close": 12030.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.54.00",
      "TimeDecimal": 11.54,
      "Open": 12030.25,
      "High": 12035.9,
      "Low": 12030,
      "Close": 12035.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.55.00",
      "TimeDecimal": 11.55,
      "Open": 12035.25,
      "High": 12035.35,
      "Low": 12031.4,
      "Close": 12031.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.56.00",
      "TimeDecimal": 11.56,
      "Open": 12031.25,
      "High": 12033.8,
      "Low": 12031,
      "Close": 12033
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.57.00",
      "TimeDecimal": 11.57,
      "Open": 12031.45,
      "High": 12033.1,
      "Low": 12030.95,
      "Close": 12031.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.58.00",
      "TimeDecimal": 11.58,
      "Open": 12031.55,
      "High": 12034.2,
      "Low": 12031.25,
      "Close": 12033.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "11.59.00",
      "TimeDecimal": 11.59,
      "Open": 12032.9,
      "High": 12034,
      "Low": 12032.3,
      "Close": 12033.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.00.00",
      "TimeDecimal": 12,
      "Open": 12032.8,
      "High": 12034.45,
      "Low": 12031.5,
      "Close": 12034.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.01.00",
      "TimeDecimal": 12.01,
      "Open": 12033.8,
      "High": 12035.7,
      "Low": 12033.55,
      "Close": 12034.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.02.00",
      "TimeDecimal": 12.02,
      "Open": 12034.05,
      "High": 12034.85,
      "Low": 12032.65,
      "Close": 12034.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.03.00",
      "TimeDecimal": 12.03,
      "Open": 12033.7,
      "High": 12035.9,
      "Low": 12032.9,
      "Close": 12033.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.04.00",
      "TimeDecimal": 12.04,
      "Open": 12032.85,
      "High": 12032.95,
      "Low": 12030.05,
      "Close": 12031.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.05.00",
      "TimeDecimal": 12.05,
      "Open": 12030.15,
      "High": 12030.35,
      "Low": 12023.35,
      "Close": 12024.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.06.00",
      "TimeDecimal": 12.06,
      "Open": 12022.9,
      "High": 12024.1,
      "Low": 12021.4,
      "Close": 12021.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.07.00",
      "TimeDecimal": 12.07,
      "Open": 12020.75,
      "High": 12022.8,
      "Low": 12019.7,
      "Close": 12020.2
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.08.00",
      "TimeDecimal": 12.08,
      "Open": 12020,
      "High": 12021.6,
      "Low": 12018.65,
      "Close": 12021.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.09.00",
      "TimeDecimal": 12.09,
      "Open": 12020.45,
      "High": 12025.5,
      "Low": 12020.45,
      "Close": 12023.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.10.00",
      "TimeDecimal": 12.1,
      "Open": 12023,
      "High": 12023.3,
      "Low": 12019.85,
      "Close": 12019.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.11.00",
      "TimeDecimal": 12.11,
      "Open": 12019.55,
      "High": 12019.8,
      "Low": 12015.4,
      "Close": 12015.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.12.00",
      "TimeDecimal": 12.12,
      "Open": 12016.5,
      "High": 12017.7,
      "Low": 12015.75,
      "Close": 12016.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.13.00",
      "TimeDecimal": 12.13,
      "Open": 12015.1,
      "High": 12021.35,
      "Low": 12015.1,
      "Close": 12020.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.14.00",
      "TimeDecimal": 12.14,
      "Open": 12020.2,
      "High": 12023.25,
      "Low": 12019.8,
      "Close": 12021.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.15.00",
      "TimeDecimal": 12.15,
      "Open": 12020.55,
      "High": 12023.65,
      "Low": 12020.5,
      "Close": 12022.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.16.00",
      "TimeDecimal": 12.16,
      "Open": 12022.1,
      "High": 12024.35,
      "Low": 12022.1,
      "Close": 12023.05
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.17.00",
      "TimeDecimal": 12.17,
      "Open": 12022.3,
      "High": 12026.5,
      "Low": 12022.3,
      "Close": 12026.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.18.00",
      "TimeDecimal": 12.18,
      "Open": 12025.6,
      "High": 12027.95,
      "Low": 12025.25,
      "Close": 12027.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.19.00",
      "TimeDecimal": 12.19,
      "Open": 12027.15,
      "High": 12030.4,
      "Low": 12026.7,
      "Close": 12030.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.20.00",
      "TimeDecimal": 12.2,
      "Open": 12029.3,
      "High": 12030.9,
      "Low": 12029.2,
      "Close": 12030.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.21.00",
      "TimeDecimal": 12.21,
      "Open": 12029.85,
      "High": 12032.45,
      "Low": 12029.4,
      "Close": 12030.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.22.00",
      "TimeDecimal": 12.22,
      "Open": 12030.25,
      "High": 12032.55,
      "Low": 12029.9,
      "Close": 12030.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.23.00",
      "TimeDecimal": 12.23,
      "Open": 12029.65,
      "High": 12032.15,
      "Low": 12029.65,
      "Close": 12031.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.24.00",
      "TimeDecimal": 12.24,
      "Open": 12030.15,
      "High": 12033.8,
      "Low": 12030.15,
      "Close": 12033.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.25.00",
      "TimeDecimal": 12.25,
      "Open": 12032.6,
      "High": 12037.05,
      "Low": 12032.6,
      "Close": 12036.7
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.26.00",
      "TimeDecimal": 12.26,
      "Open": 12036.1,
      "High": 12037.55,
      "Low": 12035.85,
      "Close": 12036.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.27.00",
      "TimeDecimal": 12.27,
      "Open": 12035.45,
      "High": 12037.8,
      "Low": 12035.45,
      "Close": 12035.8
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.28.00",
      "TimeDecimal": 12.28,
      "Open": 12035.15,
      "High": 12036.55,
      "Low": 12034.1,
      "Close": 12034.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.29.00",
      "TimeDecimal": 12.29,
      "Open": 12033.75,
      "High": 12035.35,
      "Low": 12032.8,
      "Close": 12033.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.30.00",
      "TimeDecimal": 12.3,
      "Open": 12032.6,
      "High": 12033.45,
      "Low": 12031.6,
      "Close": 12031.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.31.00",
      "TimeDecimal": 12.31,
      "Open": 12030.95,
      "High": 12033.55,
      "Low": 12030.65,
      "Close": 12032.9
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.32.00",
      "TimeDecimal": 12.32,
      "Open": 12032.3,
      "High": 12034.05,
      "Low": 12032.15,
      "Close": 12033.85
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.33.00",
      "TimeDecimal": 12.33,
      "Open": 12033.5,
      "High": 12033.5,
      "Low": 12029.5,
      "Close": 12030.95
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.34.00",
      "TimeDecimal": 12.34,
      "Open": 12030.1,
      "High": 12031.6,
      "Low": 12029.5,
      "Close": 12031.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.35.00",
      "TimeDecimal": 12.35,
      "Open": 12030.6,
      "High": 12033.35,
      "Low": 12030.55,
      "Close": 12033.15
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.36.00",
      "TimeDecimal": 12.36,
      "Open": 12032.65,
      "High": 12033.95,
      "Low": 12031.4,
      "Close": 12032.65
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.37.00",
      "TimeDecimal": 12.37,
      "Open": 12032,
      "High": 12035.55,
      "Low": 12032,
      "Close": 12035.4
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.38.00",
      "TimeDecimal": 12.38,
      "Open": 12034.25,
      "High": 12036.5,
      "Low": 12034.05,
      "Close": 12034.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.39.00",
      "TimeDecimal": 12.39,
      "Open": 12034.65,
      "High": 12035.7,
      "Low": 12032.75,
      "Close": 12032.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.40.00",
      "TimeDecimal": 12.4,
      "Open": 12032.7,
      "High": 12033.8,
      "Low": 12029.1,
      "Close": 12030.55
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.41.00",
      "TimeDecimal": 12.41,
      "Open": 12029.8,
      "High": 12030.7,
      "Low": 12026.35,
      "Close": 12027.75
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.42.00",
      "TimeDecimal": 12.42,
      "Open": 12026.3,
      "High": 12027.5,
      "Low": 12025.7,
      "Close": 12027.1
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.43.00",
      "TimeDecimal": 12.43,
      "Open": 12026.85,
      "High": 12027.3,
      "Low": 12025.4,
      "Close": 12026.3
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.44.00",
      "TimeDecimal": 12.44,
      "Open": 12025.55,
      "High": 12026.8,
      "Low": 12021.45,
      "Close": 12025.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.45.00",
      "TimeDecimal": 12.45,
      "Open": 12024.15,
      "High": 12025.7,
      "Low": 12022.95,
      "Close": 12023.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.46.00",
      "TimeDecimal": 12.46,
      "Open": 12023.15,
      "High": 12024.4,
      "Low": 12020.7,
      "Close": 12022
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.47.00",
      "TimeDecimal": 12.47,
      "Open": 12022.15,
      "High": 12023.45,
      "Low": 12020.9,
      "Close": 12023
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.48.00",
      "TimeDecimal": 12.48,
      "Open": 12022.25,
      "High": 12024.05,
      "Low": 12021.95,
      "Close": 12022.45
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.49.00",
      "TimeDecimal": 12.49,
      "Open": 12021.95,
      "High": 12023.45,
      "Low": 12018.4,
      "Close": 12019.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.50.00",
      "TimeDecimal": 12.5,
      "Open": 12018.75,
      "High": 12020.1,
      "Low": 12016.5,
      "Close": 12016.6
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.51.00",
      "TimeDecimal": 12.51,
      "Open": 12014.7,
      "High": 12016.2,
      "Low": 12009.6,
      "Close": 12010.5
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.52.00",
      "TimeDecimal": 12.52,
      "Open": 12009.9,
      "High": 12012.3,
      "Low": 12008.95,
      "Close": 12011.35
    },
    {
      "Instrument": "NIFTY",
      "Date": 20200106,
      "Time": "12.53.00",
      "TimeDecimal": 12.53,
      "Open": 12010.45,
      "High": 12014.75,
      "Low": 12010.15,
      "Close": 12014.75
    }]

export default excelData;
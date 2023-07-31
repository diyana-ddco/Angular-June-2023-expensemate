// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4200',

  cognito: {
    userPoolId: 'eu-central-1_ce5XkcA2R',
    userPoolWebClientId: '5p5v6qcvnb7rd641merjpq5sla',
  },
};


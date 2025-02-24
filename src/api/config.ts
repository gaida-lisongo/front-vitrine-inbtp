import { callbackify } from "util";

//Configuration url api prod avend api dev
const api = {
  dev: {
    url: "https://backend-vitrine-inbtp.onrender.com/api/v1",

  },
  prod: {
    url: "https://backend-vitrine-inbtp.onrender.com/api/v1",
  },
  flexData : {
    url : 'https://backend.flexpay.cd/api/rest/v1/paymentService',
    urlCallback : 'https://backend.flexpay.cd/api/rest/v1/check/',
    token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcL2xvZ2luIiwicm9sZXMiOlsiTUVSQ0hBTlQiXSwiZXhwIjoxNzk3NDk0Mjk5LCJzdWIiOiJkYjI1M2ExMzAzY2NhOTBmYTQ5MzllMDIwZDViM2E0ZiJ9.-V3mWGrX9LnObZPSB3eM1h2pM8RXa0PF10LgMpJh21A',
    merchant: 'ELMES',
    type: '1',
    currency: 'USD',
    callbackUrl: 'http://he.inbetp.net/paymentResponse'
  }
};

export default api;
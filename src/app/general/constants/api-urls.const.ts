const HOST = 'http://localhost:8080';

const USER_SERVICE = HOST + '/user-service';

export const API_URLS = {
  AUTH: {
    LOGIN: USER_SERVICE + '/auth/login',
  },
  USER: {
    RERSTAURANT: USER_SERVICE + '/users/restaurant',
    CUSTOMER: USER_SERVICE + '/users/customer',
    // CREATE: USER_SERVICE + '/user/create',
    // UPDATE: USER_SERVICE + '/user/update',
    // DELETE: USER_SERVICE + '/user/delete',
  }
};

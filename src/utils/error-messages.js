export const getRegisterErrorMessage = (error) => {
  switch (error.status) {
    case 409: {
      return 'Пользователь с таким email уже существует';
    }
    case 404: {
      return 'Страница по указанному маршруту не найдена';
    }
    case 500: {
      return 'На сервере произошла ошибка';
    }
    default:
      return 'При регистрации пользователя произошла ошибка';
  }
};

export const getLoginErrorMessage = (error) => {
  switch (error.status) {
    case 401: {
      return error.error.message;
    }
    case 404: {
      return 'При авторизации произошла ошибка. Токен не передан или передан не в том формате';
    }
    case 500: {
      return 'На сервере произошла ошибка';
    }
    default:
      return 'При регистрации пользователя произошла ошибка';
  }
};

export const getUpdateProfileErrorMessage = (error) => {
  switch (error.status) {
    case 409: {
      return 'Пользователь с таким email уже существует';
    }
    default:
      return 'При обновлении профиля произошла ошибка';
  }
};

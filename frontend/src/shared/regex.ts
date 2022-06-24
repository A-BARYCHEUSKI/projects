export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,28}$/;

export const phoneNumberRegex = /^\d+$/;

export const nameRegex = /^[a-z ,.'-]+$/i

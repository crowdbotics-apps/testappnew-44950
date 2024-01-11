import axios from "axios"
const testappnewAPI = axios.create({
  baseURL: "https://testappnew-44950.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return testappnewAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return testappnewAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return testappnewAPI.post(`/api/v1/signup/`, payload)
}
function modules_payments_get_payments_history_retrieve(payload) {
  return testappnewAPI.get(`/modules/payments/get_payments_history/`)
}
function modules_payments_get_payments_methods_retrieve(payload) {
  return testappnewAPI.get(`/modules/payments/get_payments_methods/`)
}
function modules_payments_payment_sheet_create(payload) {
  return testappnewAPI.post(`/modules/payments/payment_sheet/`)
}
function rest_auth_login_create(payload) {
  return testappnewAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return testappnewAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testappnewAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return testappnewAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testappnewAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return testappnewAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return testappnewAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return testappnewAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return testappnewAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testappnewAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return testappnewAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_payments_get_payments_history_retrieve,
  modules_payments_get_payments_methods_retrieve,
  modules_payments_payment_sheet_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}

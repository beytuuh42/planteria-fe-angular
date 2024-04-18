
// fix this https://developers.redhat.com/blog/making-environment-variables-accessible-in-front-end-containers#multi_stage_build_containers
// apparently can't use process.env['BASE_API_URL'] at runtime
export const environment = {
  production: false,
  // baseUrl: `${process.env['BASE_API_URL']}`
  baseUrl: 'http://localhost:8000/api/v1',
};

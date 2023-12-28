import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  });
}

export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  });
}

export function unlinkBg() {
  return request({
    url: '/user/unlinkBg',
    method: 'get'
  });
}

export function getUserByToken() {
  return request({
    url: '/user/getUserByToken',
    method: 'get'
  });
}
import request from '@/utils/request'

let base_url = 'http://139.186.142.22:5001'

export function get_room_members() {
  return request({
    url: base_url + '/room-members',
    method: 'get',
  })
}

export function get_one_week_messages() {
  return request({
    url: base_url + '/one-week-messages',
    method: 'get',
  })
}

export function get_question_answer_count() {
  return request({
    url: base_url + '/question-answer-count',
    method: 'get',  
  })
}
export function get_question_answer() {
  return request({
    url: base_url + '/question-answer',
    method: 'get',
  })
}
export function get_word_cloud() {
  return request({
    url: base_url + '/word-cloud',
    method: 'get',
  })
}
export function get_freq_message() {
  return request({
    url: base_url + '/freq-message',
    method: 'get',
  })
}
export function get_top_emoji() {
  return request({
    url: base_url + '/top_emoji',
    method: 'get',
  })
}


export function get_top_person() {
  return request({
    url: base_url + '/great_person',
    method: 'get',
  })
}
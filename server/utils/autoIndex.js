const AutoIncrementFactory = require('mongoose-sequence');

/**
 * 해당 스키마에 자동 증가 필드를 추가시켜줍니다.
 * @param {Schema} 스키마
 * @param {Mongoose} mongoose 위에서 불러온 mongoose
 * @param {string} name mongoose-sequence 에서 관리하기 위한 내부적인 id
 * 다른 콜렉션과 겹치지만 않으면 됨.
 * @param {string} inc_field  우리가 사용할 콜렉션에서 자동으로 증감하는 필드
 */
module.exports = (schema, mongoose, name, inc_field) => {
  const AutoIncrement = AutoIncrementFactory(mongoose);
  const option = { id: `${name}_${inc_field}`, inc_field };
  schema.plugin(AutoIncrement, option);
};

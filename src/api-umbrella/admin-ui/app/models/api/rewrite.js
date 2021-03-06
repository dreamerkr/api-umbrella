import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  matcherType: [
    validator('presence', true),
  ],
  httpMethod: [
    validator('presence', true),
  ],
  frontendMatcher: [
    validator('presence', true),
  ],
  backendReplacement: [
    validator('presence', true),
  ],
});

export default DS.Model.extend(Validations, {
  sortOrder: DS.attr('number'),
  matcherType: DS.attr(),
  httpMethod: DS.attr(),
  frontendMatcher: DS.attr(),
  backendReplacement: DS.attr(),
}).reopenClass({
  validationClass: Validations,
});

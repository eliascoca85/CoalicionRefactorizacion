const test = require('node:test');
const assert = require('node:assert/strict');

const {
    validateCreatePublicationPayload
} = require('../utils/publicacionesValidation');

test('rechaza título vacío o con solo espacios', () => {
    const result = validateCreatePublicationPayload({
        title: '   ',
        type: 'informe'
    });

    assert.equal(result, 'El título es requerido');
});

test('rechaza tipo inválido', () => {
    const result = validateCreatePublicationPayload({
        title: 'Informe de prueba',
        type: 'otro'
    });

    assert.equal(result, 'Tipo inválido. Debe ser: informe, estudio, monitoreo, investigacion');
});

test('acepta payload válido', () => {
    const result = validateCreatePublicationPayload({
        title: 'Informe de prueba',
        type: 'informe'
    });

    assert.equal(result, null);
});

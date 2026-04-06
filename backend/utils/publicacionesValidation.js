const ALLOWED_PUBLICATION_TYPES = ['informe', 'estudio', 'monitoreo', 'investigacion'];

function isBlank(value) {
    return typeof value !== 'string' || value.trim() === '';
}

function validateCreatePublicationPayload(data) {
    if (!data || typeof data !== 'object') {
        return 'Datos requeridos para crear la publicación';
    }

    if (isBlank(data.title)) {
        return 'El título es requerido';
    }

    if (isBlank(data.type)) {
        return 'El tipo es requerido';
    }

    if (!ALLOWED_PUBLICATION_TYPES.includes(data.type.trim().toLowerCase())) {
        return 'Tipo inválido. Debe ser: informe, estudio, monitoreo, investigacion';
    }

    return null;
}

module.exports = {
    ALLOWED_PUBLICATION_TYPES,
    validateCreatePublicationPayload
};

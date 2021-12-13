function mainEntriesToHtml() {
    return mainEntriesToHtml.map(entry => {
        let subDefinitionsHtml = `<< ${entry.mainDefinitions}`
        if (entry.subDefinitions) {
            subDefinitionsHtml = entry.subDefinitions.map(subDefinition => {
                return `
                >> ${subDefinition}`
            }).join('')
        }
        if (!subDefinitionsHtml) {
            return `
                <b>Definition:</b>:
                ${mainDefinitionHtml}
            `
        } else {
            return `
                <b>Definition</b>:
                    ${mainDefinitionHtml}
                    <strong>Sub-definitions:</strong>:
                    ${subDefinitionsHtml}
            `
        }
    })
}

function parser(json)
((w)=> {
    w['schema'] = {
        'title': 'person object schema',
        'type': 'object',
        'properties': {
            'firstname': {
                'type': 'string'
            },
            'lastname': {
                'type': 'string',
            },
            'age': {
                'type': 'integer',
                'minimum': 14,
                'maximum': 100
            }
        },
        'if' : {'properties': {'age': {'maximum': 40}}},
            'then': {'required': ['salary']},
            'else': {'required': ['pension']}
    };

})(window);
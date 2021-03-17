var config = {
    deps: [
        "Magento_Theme/js/cstm-script"
      ],
    paths: {            
            'owlcarousel': "Magento_Theme/js/owl.carousel.min"
            
        },   
    shim: {
        'owlcarousel': {
            deps: ['jquery']
        }
    }
    
};
/* Window Load functions */

$(window).on('load',function(){
    setTimeout(function(){

    });
});


$(document).ready(function(){

    jQuery('.section').click(function(){
        jQuery('.inner_part').addClass('long');
        setTimeout(function(){
            jQuery('.form-system .inner_part .input_1').addClass('show');
            setTimeout(function(){
                jQuery('.form-system .inner_part .input_1 input')[0].focus();
            },300);
        },800);
    });

    jQuery('.form-system .inner_part .section-1 .next-btn').click(function(){
        var $this = jQuery(this);
        if(type($this.prev().children())){
            if(!jQuery('.form-system .inner_part').hasClass('animate')){
                jQuery('.form-system .inner_part').addClass('animate');
            }
            else{
                jQuery('.form-system .inner_part').removeClass('animate');
            }

            setTimeout(function(){
                if($this.parent().next().length > 0){
                    jQuery('.form-system .inner_part .section-1').removeClass('show');
                    $this.parent().next().addClass('show');
                }
                else{
                    /* Form Complete success */
                    jQuery('.form-system .inner_part').addClass('no-transition');
                    jQuery('.form-system .inner_part .section-1').removeClass('show');
                    setTimeout(function(){
                        $('.long').hide("slide", { direction: "right" }, 500);
                    },300)
                    setTimeout(function(){
                        jQuery('.form-system .process_bar span').text(jQuery('#userName input').val());
                        jQuery('.form-system .process_bar').addClass('show');
                    },800)
                }
                $this.parent().addClass('completed');
                var totalBlogs = jQuery('.form_data .section-1').length;
                var completedBlog =  jQuery('.form_data .completed').length/totalBlogs * 100;

                jQuery('.form-system .process_bar').css('width',completedBlog+'%');
                setTimeout(function(){
                    if($this.parent().next().children('.input_section').children('input').length > 0){
                        $this.parent().next().children('.input_section').children('input')[0].focus();
                    }
                },300);
            },300);
        }

        else{
            $this.parent().addClass('error');
            setTimeout(function(){
                jQuery('.form-system .inner_part .section-1').removeClass('error');
            },1000);
        }

    });

    function type(input){

        this.length;
        this.min;
        this.max;
        this.type = input.attr('type');
        this.value = input.val();


        /* Check Input type text */
        if(this.type == 'text'){
            if(this.value){
                return true;
            }
            return false;
        }

        /* Check Input type Email */
        if(this.type == 'email'){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value))
            {
                return true;
            }
            return false;
        }

        /* 
        * Check Input type Tel and  Number 
        * Check It's number
        * Check Min and Max
        */
        if(this.type == 'tel' || this.type == 'number'){
            this.length = input.val().length;
            this.min = Number(input.attr('min'));
            this.max = Number(input.attr('max'));
            if(!isNaN(this.value)){
                if(this.min != undefined && this.max != undefined ){
                    if(this.length >= this.min &&  this.length <= this.max){
                        return true;
                    }
                    return false;
                }
                if(this.min || this.max){
                    if(this.min){
                        if(this.length > this.min){
                            return true;
                        }
                        else{
                            return false;
                        }
                    }
                    if(this.max){
                        if(this.length < this.min){
                            return true;
                        }
                        else{
                            return false;
                        }
                    }
                }
                return true;
            }
            return false;
        }
    }

    jQuery(document).on('keypress',function(e) {
        if(e.which == 13) {
            jQuery('.section-1.show .next-btn').trigger('click')
        }
    });

});

$(window).resize(function(){

})


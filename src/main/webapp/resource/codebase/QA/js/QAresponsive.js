webix.ready(function(){
	/*
	  Try resizing the browser window and the elements will response to the changes.
	*/
	webix.ui({
	  type:"space",
	  id:"a1", 
	  rows:[
	    {
	      type:"space",
	      padding:0, 
	      responsive:"a1", 
	      cols:[
	        { 
	          view:"sidebar", 
	          data:menu_data,
	          ready:function(){ 
	            this.select(this.getFirstId()); 
	          },
	          select:true,
	          scroll:false,
	          width:120 
	        },
	        { template:"column 2", width:120 },
	        { 
	          view:"datatable", 
	          scrollX: false,
	          select:true, 
	          columns:[
	            { id:"title", fillspace:1 }, 
	            { id:"votes"}
	          ], 
	          data:grid_data,
	          minWidth:250 
	        }
	      ]
	    }
	  ]
	});

});

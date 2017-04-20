RowManager = function(table){

	var manager = {
		table:table,
		element:$("<div class='tabulator-tableHolder'></div>"), //containing element
		tableElement:$("<div class='tabulator-table'></div>"), //table element
		columnManager:null, //hold column manager object

		scrollTop:0,
		scrollLeft:0,

		//return containing element
		getElement:function(){
			return this.element;
		},

		//link to column manager
		setColumnManager:function(manager){
			this.columnManager = manager;
		},

	}

	//initialize manager
	manager.element.append(manager.tableElement);

	//scroll header along with table body
	manager.element.scroll(function(){

		var holder = $(this);
		var left = holder.scrollLeft();
		var top = holder.top();

		if(manager.scrollLeft != left){
			manager.columnManager.scrolHoz(left);
		}


		//trigger progressive rendering on scroll
		// if(self.options.progressiveRender && scrollTop != holder.scrollTop() && scrollTop < holder.scrollTop()){
		// 	if(!self.progressiveRenderLoading){
		// 		if(holder[0].scrollHeight - holder.innerHeight() - holder.scrollTop() < self.options.progressiveRenderMargin){
		// 			if(self.options.progressiveRender == "remote"){
		// 				if(self.paginationCurrentPage <= self.paginationMaxPage){
		// 					self.progressiveRenderLoading = true;
		// 					self._renderTable(true);
		// 				}
		// 			}else{
		// 				if(self.paginationCurrentPage < self.paginationMaxPage){
		// 					self.paginationCurrentPage++;
		// 					self._renderTable(true);
		// 				}
		// 			}
		// 		}
		// 	}else{
		// 		self.progressiveRenderLoadingNext = true;
		// 	}
		// }


		manager.scrollLeft = left;
		manager.scrollTop = top;
	});


	return manager;
}
const core = {

  /**
   * colortypes
   * 
   * return color types
   */
  colortypes: function(type){
    let color;
    switch (type) {
      case 'secondary':
        color = 'text-gray-400';
        break;
      case 'success':
        color = 'text-green-500';
        break;
      case 'warning':
        color = 'text-yellow-500';
        break;
      case 'danger':
        color = 'text-red-500';
        break;
      default:
        color = 'text-gray-600';
        break;
    }
    return color;
  },

}

export default core;
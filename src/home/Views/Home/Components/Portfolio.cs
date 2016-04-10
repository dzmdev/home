using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace home.Views.Home.Components
{
    public class Portfolio : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}

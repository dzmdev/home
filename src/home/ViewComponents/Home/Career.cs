using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace home.ViewComponents.Home
{
    public class Career : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}

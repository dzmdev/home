using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace home.ViewComponents.Home
{
    public class About : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}

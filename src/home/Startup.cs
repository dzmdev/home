﻿using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace home
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseIISPlatformHandler();
            app.UseStaticFiles();
            app.UseMvc(routes => { routes.MapRoute("default", "{controller=Home}/{action=Index}"); });
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
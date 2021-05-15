using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace StaticWebAppBackend.Function
{
    public static class StaticWebAppBackend
    {
        [FunctionName("StaticWebAppBackend")]
        public static List<Post> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            return GetPosts();
        }
    
        private static List<Post> GetPosts()
        {
            var listofPosts = new List<Post>();
            
            listofPosts.AddRange(new List<Post>
            {
            new Post{id = "1", 
            heading ="Inner Source — the key to improving software asset reusability", 
            subHeading ="Promises, Challenges, Implementation of Inner Source for software asset reusability",
            body ="Promises, Challenges, Implementation of Inner Source for software asset reusability",
            backgroundImage = "none",
            meta = "Inner Source",
            slug = ""
            },

            new Post{id = "2", 
            heading ="Bringing the Power of Cloud to Your Development Environment With GitHub Codespaces", 
            subHeading ="Bringing the Power of Cloud to Your Development Environment With GitHub Codespaces for Visual Studio",
            body ="Bringing the Power of Cloud to Your Development Environment With GitHub Codespaces",
            backgroundImage = "none",
            meta = "CodeSpaces",
            slug = ""
            },

            new Post{id = "3", 
            heading ="Document Versioning with Azure Blob Storage", 
            subHeading ="Build your custom Document Library using Azure Blob Storage Versioning. Document versioning, restore, delete a document by version using C#",
            body ="Build your custom Document Library using Azure Blob Storage Versioning. Document versioning, restore, delete a document by version using C#",
            backgroundImage = "none",
            meta = "Azure Blob Storage",
            slug = ""
            }

            });
           
            return listofPosts;
        }
    }
}

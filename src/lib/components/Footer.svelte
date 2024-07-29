<footer>
    <ul class="footerLinks">
        <!-- placeholder links -->
        <li><a href="/">Feedback Form</a></li>
        <li><a href="/">Resume</a></li>
    </ul>

    <div class="copyright">
        <p>
            &copy; 2024 - Nathaniel Fritz. Licensed under the <a
                href="http://www.apache.org/licenses/LICENSE-2.0"
                target="_blank">Apache License</a
            >, Version 2.0.
        </p>

        <p>
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
            implied. See the License for the specific language governing
            permissions and limitations under the License.
        </p>
    </div>
</footer>

<style>
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: gray;
        color: white;
        padding: 1rem;
        border-top: 1px solid black;
    }

    .footerLinks {
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 0 0 1rem 0;
    }

    .footerLinks li {
        margin: 0 1.5rem;
    }

    .footerLinks a {
        color: white;
        text-decoration: none;
    }

    .footerLinks a:hover {
        text-decoration: underline;
        color: green;
    }

    .copyright {
        text-align: center;
        font-size: 0.875rem;
        width: 70%;
    }

    .copyright a {
        color: white;
    }

    .copyright a:hover {
        text-decoration: underline;
        color: green;
    }
</style>

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class introText : MonoBehaviour {

  public Text textShown = null;
  public void NextWord (string word){

    textShown.text = word;
  }

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}

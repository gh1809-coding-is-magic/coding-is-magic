using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class IntroButtonFunctionality : MonoBehaviour
{
  public Button continueGame;
  float counter = 0f;

  // Use this for initialization
  void Start()
  {
    continueGame.onClick.AddListener(TaskOnClick);

  }

  void TaskOnClick()
  {
    Debug.Log("great!");

    counter++;

    Debug.Log(counter);

    if (counter == 6)
    {

      continueGame.interactable = false;
    }
  }

  // Update is called once per frame
  void Update()
  {

  }

  void OnMouseDown()
  {
    Debug.Log("clicked!");
  }
}
